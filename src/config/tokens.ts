// Конфигурация токенов для API
function requireToken(name: 'ADMIN_TOKEN' | 'READ_TOKEN'): string {
  const value = process.env[name]
  if (!value) {
    throw new Error(
      `${name} не задан. Раньше здесь стояло значение по умолчанию — ` +
      'при пустом окружении API открывался всем, кто знает эту строку из репозитория.'
    )
  }
  return value
}

export const TOKENS = {
  // Админский токен - для создания, обновления, удаления
  get ADMIN() {
    return requireToken('ADMIN_TOKEN')
  },

  // Токен для чтения - для GET запросов
  get READ() {
    return requireToken('READ_TOKEN')
  }
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