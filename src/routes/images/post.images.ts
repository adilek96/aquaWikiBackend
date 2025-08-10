import { Hono } from "hono";
import type { HonoEnv } from "../../../lib/honoEnv.js";
import * as Minio from "minio";


const router = new Hono<HonoEnv>();

const minioEndpoint = process.env.MINIO_ENDPOINT;
const minioPort = process.env.MINIO_PORT;
const minioAccessKey = process.env.MINIO_ACCESS_KEY;
const minioSecretKey = process.env.MINIO_SECRET_KEY;
const minioBucketName = process.env.MINIO_BUCKET_NAME;
const minioUseSSL = process.env.MINIO_USE_SSL;

router.post("/images", async (c) => {
  try {
    // Проверяем Content-Type
    const contentType = c.req.header("content-type");
    if (!contentType || !contentType.includes("multipart/form-data")) {
      return c.json({
        statusCode: 400,
        statusMessage: "Bad Request",
        error: "Content-Type должен быть multipart/form-data",
        receivedContentType: contentType
      }, 400);
    }

    const formData = await c.req.formData();
    const file = formData.get("file") as File;

    if (!minioEndpoint || !minioPort || !minioAccessKey || !minioSecretKey || !minioBucketName || !minioUseSSL) {
      return c.json({
        statusCode: 500,
        success: false,
        error: "Не все переменные окружения установлены",
      }, 500);
    }

    if (!file) {
      return c.json(
        {
          statusCode: 400,
          statusMessage: "Bad Request",
          error: "Файл не найден в запросе",
        },
        400
      );
    }

    // Проверяем размер файла (максимум 10MB)
    if (file.size > 10 * 1024 * 1024) {
      return c.json(
        { statusCode: 400, statusMessage: "Размер файла не должен превышать 10MB",error: "Размер файла не должен превышать 10MB" },
        400
      );
    }

   // Создаем уникальное имя файла
   const timestamp = Date.now();
   const fileExtension = file.name.split('.').pop();
   const fileName = `${timestamp}.${fileExtension}`;

   let imageUrl: string;
    
    // Инициализируем MinIO клиент
    const minioClient = new Minio.Client({
      endPoint: minioEndpoint,
      port: parseInt(minioPort),
      useSSL: minioUseSSL === 'true',
      accessKey: minioAccessKey,
      secretKey: minioSecretKey,
    });

    // Проверяем существование бакета
    const bucketExists = await minioClient.bucketExists(minioBucketName);
    if (!bucketExists) {
      await minioClient.makeBucket(minioBucketName);
    }

    // Конвертируем файл в буфер
    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);

    // Загружаем файл в MinIO
    await minioClient.putObject(minioBucketName, fileName, buffer, file.size, {
      'Content-Type': file.type,
    });

    imageUrl = await minioClient.presignedGetObject(minioBucketName, fileName, 7 * 24 * 60 * 60);

    return c.json({ statusCode: 200, imageUrl });
  } catch (error) {
    // Специальная обработка ошибки FormData
    if (error instanceof Error && error.message.includes("Failed to parse body as FormData")) {
      return c.json({
        statusCode: 400,
        statusMessage: "Bad Request",
        error: "Неправильный формат данных. Ожидается multipart/form-data с полем 'file'",
        details: "Убедитесь, что запрос содержит правильный Content-Type и структуру данных"
      }, 400);
    }
    
    return c.json(
      {
        statusCode: 500,
        statusMessage: "Server Error",
        error: error instanceof Error ? error.message : String(error),
      },
      500
    );
  }
});

export default router;



