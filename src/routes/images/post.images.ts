import { Hono } from "hono";
import type { HonoEnv } from "../../../lib/honoEnv.js";
import * as Minio from "minio";

 // Настройки MinIO из переменных окружения
 const minioEndpoint = process.env.MINIO_ENDPOINT || '194.163.151.11';
 const minioPort = parseInt(process.env.MINIO_PORT || '9000');
 const minioAccessKey = process.env.MINIO_ACCESS_KEY || 'minioadmin';
 const minioSecretKey = process.env.MINIO_SECRET_KEY || 'minioadmin';
 const minioBucketName = process.env.MINIO_BUCKET_NAME || 'aquarium-images';
 const minioUseSSL = process.env.MINIO_USE_SSL === 'true';
 

const router = new Hono<HonoEnv>();

router.post("/images", async (c) => {
 
  const formData = await c.req.formData();
  const file = formData.get("file") as File;

  if (!file) {
   return c.json(
      {
        statusCode: 404,
        statusMessage: "File not found",
        error: "File not found",
      },
      404
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

 

  try {
   let imageUrl: string;

  try {
    // Инициализируем MinIO клиент
    const minioClient = new Minio.Client({
      endPoint: minioEndpoint,
      port: minioPort,
      useSSL: minioUseSSL,
      accessKey: minioAccessKey,
      secretKey: minioSecretKey,
    });

    // Проверяем существование бакета
    const bucketExists = await minioClient.bucketExists(minioBucketName);
    if (!bucketExists) {
      console.log("Создаем бакет:", minioBucketName);
      await minioClient.makeBucket(minioBucketName);
    }

    // Конвертируем файл в буфер
    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);

    // Загружаем файл в MinIO
    await minioClient.putObject(minioBucketName, fileName, buffer, file.size, {
      'Content-Type': file.type,
    });

    // Генерируем presigned URL для доступа к файлу (действует 7 дней)
    imageUrl = await minioClient.presignedGetObject(minioBucketName, fileName, 7 * 24 * 60 * 60);
  } catch (minioError) {

    return c.json(
      { statusCode: 500, statusMessage: "Ошибка загрузки в MinIO: " + (minioError instanceof Error ? minioError.message : "Неизвестная ошибка"),error: "Ошибка загрузки в MinIO: " + (minioError instanceof Error ? minioError.message : "Неизвестная ошибка") },
      500
    );
  }
    
   

    return c.json({ statusCode: 200, imageUrl });
  } catch (error) {
    console.error("Route Error:", error);
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



