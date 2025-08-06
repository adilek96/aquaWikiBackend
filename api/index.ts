// api/index.ts
import { handle } from 'hono/vercel'
import app from '../src/index' // путь до твоего `Hono` приложения

export const config = {
  runtime: 'nodejs', // или 'nodejs' если используешь Prisma
}

export default handle(app)
