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
  const formData = await c.req.formData();
  const file = formData.get("file") as File;




  if (!minioEndpoint || !minioPort || !minioAccessKey || !minioSecretKey || !minioBucketName || !minioUseSSL) {
    return c.json({
      statusCode: 500,
      success: false,
      error: "Не все переменные окружения установлены",
    }, 500);
  }

  try {
   
   

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

    console.log("Подключаемся к MinIO:", { endPoint: minioEndpoint, port: minioPort, useSSL: minioUseSSL, bucketName: minioBucketName });
    
    // Инициализируем MinIO клиент
    const minioClient = new Minio.Client({
      endPoint: minioEndpoint,
      port: parseInt(minioPort),
      useSSL: minioUseSSL === 'true',
      accessKey: minioAccessKey,
      secretKey: minioSecretKey,
    });

    // Проверяем существование бакета
    console.log("Проверяем существование бакета:", minioBucketName);
    const bucketExists = await minioClient.bucketExists(minioBucketName);
    if (!bucketExists) {
      console.log("Создаем бакет:", minioBucketName);
      await minioClient.makeBucket(minioBucketName);
    } else {
      console.log("Бакет уже существует:", minioBucketName);
    }

    // Конвертируем файл в буфер
    console.log("Конвертируем файл в буфер:", { fileName, size: file.size, type: file.type });
    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);

    // Загружаем файл в MinIO
    console.log("Загружаем файл в MinIO:", fileName);
    await minioClient.putObject(minioBucketName, fileName, buffer, file.size, {
      'Content-Type': file.type,
    });

    // Генерируем presigned URL для доступа к файлу (действует 7 дней)
    console.log("Генерируем presigned URL для файла:", fileName);
    imageUrl = await minioClient.presignedGetObject(minioBucketName, fileName, 7 * 24 * 60 * 60);
    console.log("Файл успешно загружен, URL:", imageUrl);

    return c.json({ statusCode: 200, imageUrl });
  } catch (error) {
    console.error("Route Error:", error);
    console.error("Error details:", {
      name: error instanceof Error ? error.name : 'Unknown',
      message: error instanceof Error ? error.message : String(error),
      stack: error instanceof Error ? error.stack : undefined
    });
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



