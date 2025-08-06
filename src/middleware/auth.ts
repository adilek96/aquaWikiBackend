import { createMiddleware } from 'hono/factory'
import type { HonoEnv } from '../lib/honoEnv.js'
import { TOKENS } from '../config/tokens.js'

// Middleware для проверки админского токена (для создания, обновления, удаления)
export const adminAuth = createMiddleware<HonoEnv>(async (c, next) => {
  const authHeader = c.req.header('Authorization')
  
  if (!authHeader) {
    return c.json({
      statusCode: 401,
      statusMessage: 'Unauthorized',
      error: 'Authorization header is required'
    }, 401)
  }

  const token = authHeader.replace('Bearer ', '')
  
  if (token !== TOKENS.ADMIN) {
    return c.json({
      statusCode: 403,
      statusMessage: 'Forbidden',
      error: 'Invalid admin token'
    }, 403)
  }

  await next()
})

// Middleware для проверки токена чтения (для GET запросов)
export const readAuth = createMiddleware<HonoEnv>(async (c, next) => {
  const authHeader = c.req.header('Authorization')
  
  if (!authHeader) {
    return c.json({
      statusCode: 401,
      statusMessage: 'Unauthorized',
      error: 'Authorization header is required'
    }, 401)
  }

  const token = authHeader.replace('Bearer ', '')
  
  if (token !== TOKENS.READ && token !== TOKENS.ADMIN) {
    return c.json({
      statusCode: 403,
      statusMessage: 'Forbidden',
      error: 'Invalid token'
    }, 403)
  }

  await next()
})

// Middleware для опциональной аутентификации (можно читать без токена)
export const optionalAuth = createMiddleware<HonoEnv>(async (c, next) => {
  const authHeader = c.req.header('Authorization')
  
  if (authHeader) {
    const token = authHeader.replace('Bearer ', '')
    
    if (token !== TOKENS.READ && token !== TOKENS.ADMIN) {
      return c.json({
        statusCode: 403,
        statusMessage: 'Forbidden',
        error: 'Invalid token'
      }, 403)
    }
  }

  await next()
}) 