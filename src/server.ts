// Точка входа для запуска в контейнере.
//
// src/index.ts заканчивается `export default app` — этого достаточно для
// Vercel, который сам оборачивает приложение в обработчик запроса, но при
// `node dist/index.js` процесс просто отработал бы экспорт и завершился,
// не заняв ни одного порта. Здесь поднимаем обычный HTTP-сервер.
//
// Файл на Vercel не используется: там по-прежнему работает api/index.ts.

import { serve } from '@hono/node-server'
import app from './index.js'

const port = Number(process.env.PORT ?? 3000)

serve({ fetch: app.fetch, port, hostname: '0.0.0.0' }, (info) => {
  console.log(`aquaWikiBackend слушает http://0.0.0.0:${info.port}`)
})
