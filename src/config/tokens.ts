// Конфигурация токенов для API
export const TOKENS = {
  // Админский токен - для создания, обновления, удаления
  ADMIN: process.env.ADMIN_TOKEN || 'admin_secret_token_12345',
  
  // Токен для чтения - для GET запросов
  READ: process.env.READ_TOKEN || 'read_public_token_67890'
}

// Генерация новых токенов (для продакшена)
export async function generateTokens() {
  const crypto = await import('crypto')
  
  const adminToken = crypto.randomBytes(32).toString('hex')
  const readToken = crypto.randomBytes(32).toString('hex')
  
  console.log('=== СГЕНЕРИРОВАННЫЕ ТОКЕНЫ ===')
  console.log('ADMIN_TOKEN:', adminToken)
  console.log('READ_TOKEN:', readToken)
  console.log('==============================')
  
  return { adminToken, readToken }
}

// Проверка токена
export function validateToken(token: string): 'admin' | 'read' | 'invalid' {
  if (token === TOKENS.ADMIN) return 'admin'
  if (token === TOKENS.READ) return 'read'
  return 'invalid'
} 