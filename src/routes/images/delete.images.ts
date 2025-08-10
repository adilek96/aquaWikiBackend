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

router.delete("/images/:imageId", async (c) => {
  const imageUrl = c.req.param("imageUrl");

  try {
    // Инициализируем MinIO клиент
    const minioClient = new Minio.Client({
      endPoint: minioEndpoint,
      port: minioPort,
      useSSL: minioUseSSL,
      accessKey: minioAccessKey,
      secretKey: minioSecretKey,
    });

   
    
    if(!imageUrl){
      return c.json(
        { statusCode: 404, statusMessage: "Image not found", error: "Image not found" },
        404
      );
    }
    
    // Извлекаем имя файла из URL
    const urlObj = new URL(imageUrl);
    const pathParts = urlObj.pathname.split('/');
    const fileName = pathParts.slice(-2).join('/'); // articleId/filename
    
    // Удаляем файл из MinIO
    await minioClient.removeObject(minioBucketName, fileName);
    
   

    return c.json({ 
      statusCode: 200, 
      success: true, 
      message: "Изображение успешно удалено" 
    });
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

