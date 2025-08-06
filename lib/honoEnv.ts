import { PrismaClient } from '@prisma/client'; // Import PrismaClient for type inference


// Определяем тип окружения для Hono, чтобы Prisma был доступен
export interface HonoEnv {
  Variables: {
    prisma: PrismaClient;
  }
}