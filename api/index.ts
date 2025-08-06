// api/index.ts
import { handle } from 'hono/vercel'
import app from '../src/index.js' // путь до твоего `Hono` приложения

export const config = {
    runtime: 'nodejs' // обязательно с версией
  }
export default handle(app)
