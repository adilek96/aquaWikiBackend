import { Redis } from 'ioredis'
import { createMiddleware } from 'hono/factory'

/**
 * Кэш ответов API вики.
 *
 * Кэшируются только GET: содержимое энциклопедии читают гораздо чаще, чем
 * правят. Любая успешная запись (POST/PATCH/DELETE) повышает версию
 * пространства имён, и весь прежний кэш разом перестаёт находиться —
 * перебирать ключи не нужно.
 *
 * При недоступном Redis middleware просто пропускает запрос дальше:
 * кэш не должен быть причиной отказа API.
 */

const NS = 'wiki'
const TTL_SECONDS = 300

let client: Redis | null = null
let disabled = false

function getRedis(): Redis | null {
  if (disabled) return null
  if (client) return client

  const url = process.env.REDIS_URL
  if (!url) {
    disabled = true
    return null
  }

  client = new Redis(url, {
    // Без очереди офлайн-запросов: лучше сразу промах, чем висящий ответ
    enableOfflineQueue: false,
    maxRetriesPerRequest: 1,
    connectTimeout: 1000,
    retryStrategy: (times) => Math.min(times * 200, 10_000),
  })

  client.on('error', (e) => console.warn('[redis] недоступен:', e.message))
  return client
}

async function version(): Promise<string> {
  const redis = getRedis()
  if (!redis) return '0'
  try {
    return (await redis.get(`ver:${NS}`)) ?? '0'
  } catch {
    return '0'
  }
}

export const cacheMiddleware = createMiddleware(async (c, next) => {
  const redis = getRedis()
  if (!redis) return next()

  // Запись: пропускаем дальше и сбрасываем кэш, если всё прошло успешно
  if (c.req.method !== 'GET') {
    await next()
    if (c.res.status < 400) {
      try {
        await redis.incr(`ver:${NS}`)
      } catch {
        /* молча: неудачный сброс не повод ломать ответ */
      }
    }
    return
  }

  const key = `${NS}:res:v${await version()}:${c.req.url}`

  try {
    const hit = await redis.get(key)
    if (hit) {
      const { status, body } = JSON.parse(hit) as { status: number; body: string }
      return c.newResponse(body, status as 200, {
        'content-type': 'application/json; charset=UTF-8',
        'x-cache': 'HIT',
      })
    }
  } catch {
    /* промах — идём в обработчик */
  }

  await next()

  // Кэшируем только удачные JSON-ответы
  const type = c.res.headers.get('content-type') ?? ''
  if (c.res.status === 200 && type.includes('application/json')) {
    try {
      const body = await c.res.clone().text()
      await redis.set(key, JSON.stringify({ status: 200, body }), 'EX', TTL_SECONDS)
      c.res.headers.set('x-cache', 'MISS')
    } catch {
      /* молча */
    }
  }
})
