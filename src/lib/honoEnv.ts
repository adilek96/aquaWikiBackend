import { PrismaClient } from '@prisma/client'

export interface HonoEnv {
  Variables: {
    prisma: PrismaClient
  }
} 