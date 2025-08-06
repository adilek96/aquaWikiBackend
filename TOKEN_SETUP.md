# 🔐 Настройка токенов для AquaWiki API

## 📋 Обзор

AquaWiki API использует простую систему токенов для аутентификации без полноценной системы пользователей. Это идеально подходит для блога, где только вы можете создавать/редактировать контент, а все остальные могут только читать.

## 🎯 Типы токенов

### 1. **ADMIN_TOKEN** - Админский токен
- **Назначение**: Создание, обновление, удаление контента
- **Использование**: Только для вас (администратора)
- **Права**: Полный доступ ко всем операциям

### 2. **READ_TOKEN** - Токен для чтения
- **Назначение**: Только чтение контента
- **Использование**: Для вашего Next.js приложения
- **Права**: Только GET запросы

## 🚀 Быстрая настройка

### Шаг 1: Генерация токенов

```bash
# Запустите сервер
npm run dev

# Сгенерируйте новые токены
curl -X POST http://localhost:3000/tokens/generate
```

### Шаг 2: Настройка переменных окружения

Создайте файл `.env` в корне проекта:

```env
# Токены для API
ADMIN_TOKEN=ваш_админский_токен_здесь
READ_TOKEN=ваш_токен_чтения_здесь

# База данных
DATABASE_URL=ваша_строка_подключения_к_бд
```

### Шаг 3: Перезапуск сервера

```bash
# Остановите сервер (Ctrl+C) и запустите заново
npm run dev
```

## 📝 Использование токенов

### Для админских операций (ваши запросы)

```bash
# Создание категории
curl -X POST "http://localhost:3000/categories/category" \
  -H "Authorization: Bearer ваш_админский_токен" \
  -H "Content-Type: application/json" \
  -d '{
    "translations": {
      "az": {"title": "Balıq", "description": "Balıq haqqında"},
      "ru": {"title": "Рыба", "description": "О рыбе"},
      "en": {"title": "Fish", "description": "About fish"}
    }
  }'

# Обновление статьи
curl -X PATCH "http://localhost:3000/articles/article" \
  -H "Authorization: Bearer ваш_админский_токен" \
  -H "Content-Type: application/json" \
  -d '{
    "id": "article_id",
    "translations": {
      "ru": {"title": "Новый заголовок", "description": "Новое описание"}
    }
  }'

# Удаление подкатегории
curl -X DELETE "http://localhost:3000/subcategories/subcategory/subcategory_id" \
  -H "Authorization: Bearer ваш_админский_токен"
```

### Для чтения (ваше Next.js приложение)

```bash
# Получение всех статей
curl "http://localhost:3000/articles?locale=ru" \
  -H "Authorization: Bearer ваш_токен_чтения"

# Получение конкретной статьи
curl "http://localhost:3000/articles/article/article_id?locale=ru" \
  -H "Authorization: Bearer ваш_токен_чтения"
```

## 🔧 Интеграция с Next.js

### В вашем Next.js приложении:

```typescript
// lib/api.ts
const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000'
const READ_TOKEN = process.env.API_READ_TOKEN

export async function fetchArticles(locale = 'ru') {
  const response = await fetch(`${API_BASE_URL}/articles?locale=${locale}`, {
    headers: {
      'Authorization': `Bearer ${READ_TOKEN}`,
      'Content-Type': 'application/json'
    }
  })
  
  if (!response.ok) {
    throw new Error('Failed to fetch articles')
  }
  
  return response.json()
}

export async function fetchArticle(id: string, locale = 'ru') {
  const response = await fetch(`${API_BASE_URL}/articles/article/${id}?locale=${locale}`, {
    headers: {
      'Authorization': `Bearer ${READ_TOKEN}`,
      'Content-Type': 'application/json'
    }
  })
  
  if (!response.ok) {
    throw new Error('Failed to fetch article')
  }
  
  return response.json()
}
```

### Переменные окружения в Next.js (.env.local):

```env
NEXT_PUBLIC_API_URL=http://localhost:3000
API_READ_TOKEN=ваш_токен_чтения
```

## 🛡️ Безопасность

### Рекомендации:

1. **Храните токены в переменных окружения**
   - Никогда не коммитьте токены в Git
   - Используйте `.env` файлы (добавьте в `.gitignore`)

2. **Регулярно обновляйте токены**
   ```bash
   # Генерируйте новые токены каждые несколько месяцев
   curl -X POST http://localhost:3000/tokens/generate
   ```

3. **Используйте HTTPS в продакшене**
   - Всегда используйте HTTPS для API в продакшене
   - Обновите URL в Next.js приложении

4. **Ограничьте доступ к админскому токену**
   - Админский токен должен быть только у вас
   - Токен чтения можно использовать в приложении

## 🔍 Отладка

### Проверка токенов:

```bash
# Проверьте, что токены работают
curl "http://localhost:3000/articles" \
  -H "Authorization: Bearer ваш_токен_чтения"

# Если получаете 401/403, проверьте:
# 1. Правильность токена
# 2. Формат заголовка Authorization
# 3. Переменные окружения
```

### Логи сервера:

```bash
# Следите за логами сервера
npm run dev

# Вы увидите информацию о запросах и ошибках аутентификации
```

## 📚 Дополнительные ресурсы

- **Swagger документация**: `http://localhost:3000/docs`
- **OpenAPI спецификация**: `http://localhost:3000/api-docs`
- **Полная документация API**: `API_DOCUMENTATION.md`

## 🚨 Важные замечания

1. **Токены по умолчанию**: В разработке используются простые токены по умолчанию
2. **Продакшен**: Обязательно сгенерируйте новые токены для продакшена
3. **Резервное копирование**: Сохраните токены в безопасном месте
4. **Мониторинг**: Следите за использованием API и подозрительной активностью 