# Деплой AquaWiki API на Vercel

## 🚀 Быстрый деплой

### 1. Подготовка проекта

Убедитесь, что у вас есть:

- [ ] GitHub репозиторий с проектом
- [ ] База данных PostgreSQL (например, на Supabase, Railway или Neon)
- [ ] Переменные окружения

### 2. Настройка базы данных

Рекомендуемые провайдеры:

- **Supabase** (бесплатный план)
- **Railway** (бесплатный план)
- **Neon** (бесплатный план)

### 3. Деплой на Vercel

1. **Перейдите на [vercel.com](https://vercel.com)**
2. **Подключите ваш GitHub репозиторий**
3. **Настройте переменные окружения:**

```bash
# Обязательные переменные
DATABASE_URL=postgresql://username:password@host:port/database

# Токены (сгенерируйте после первого деплоя)
ADMIN_TOKEN=your_admin_token_here
READ_TOKEN=your_read_token_here
```

4. **Настройки сборки:**
   - **Framework Preset**: Node.js
   - **Build Command**: `npm run vercel-build`
   - **Output Directory**: `dist`
   - **Install Command**: `npm install`
   - **Node.js Version**: 18.x

### 4. После деплоя

1. **Сгенерируйте токены:**

```bash
curl -X POST https://your-app.vercel.app/tokens/generate
```

2. **Обновите переменные окружения** в Vercel Dashboard с полученными токенами

3. **Перезапустите деплой** в Vercel Dashboard

## 🔧 Конфигурация

### Файлы для Vercel

- `api/index.ts` - точка входа для Vercel
- `vercel.json` - конфигурация Vercel
- `package.json` - скрипты сборки

### CORS настройки

В `api/index.ts` настроен CORS для:

- `http://localhost:3000` (локальная разработка)
- `https://your-vercel-app.vercel.app` (продакшн)

**Обновите URL в `api/index.ts` на ваш реальный домен Vercel!**

### Swagger документация

После деплоя документация будет доступна по адресу:

- `https://your-app.vercel.app/docs` - Swagger UI
- `https://your-app.vercel.app/api-docs` - OpenAPI JSON

## 🐛 Устранение неполадок

### Ошибка "Failed to fetch" в Swagger

1. **Проверьте URL в `src/swagger.ts`:**

```typescript
servers: [
  {
    url: "http://localhost:3000",
    description: "Локальный сервер разработки",
  },
  {
    url: "https://your-real-app.vercel.app", // Обновите на ваш URL
    description: "Продакшн сервер (Vercel)",
  },
];
```

2. **Проверьте CORS настройки в `api/index.ts`:**

```typescript
app.use(
  "*",
  cors({
    origin: ["http://localhost:3000", "https://your-real-app.vercel.app"], // Обновите
    allowMethods: ["GET", "POST", "PUT", "DELETE", "PATCH", "OPTIONS"],
    allowHeaders: ["Content-Type", "Authorization"],
    credentials: true,
  })
);
```

### Ошибка Prisma

1. **Проверьте `DATABASE_URL`** в переменных окружения Vercel
2. **Убедитесь, что база данных доступна** из интернета
3. **Проверьте SSL настройки** базы данных

### Ошибка сборки

1. **Проверьте Node.js версию** (должна быть 18+)
2. **Убедитесь, что все зависимости установлены**
3. **Проверьте TypeScript конфигурацию**

## 📝 Проверка работоспособности

После деплоя проверьте:

1. **Главная страница:**

```bash
curl https://your-app.vercel.app/
```

2. **Swagger документация:**

```bash
curl https://your-app.vercel.app/docs
```

3. **Генерация токенов:**

```bash
curl -X POST https://your-app.vercel.app/tokens/generate
```

4. **Получение категорий:**

```bash
curl https://your-app.vercel.app/categories
```

## 🔄 Обновление после изменений

1. **Закоммитьте изменения** в GitHub
2. **Vercel автоматически пересоберет** приложение
3. **Проверьте новый деплой** в Vercel Dashboard

## 📞 Поддержка

Если возникли проблемы:

1. Проверьте логи в Vercel Dashboard
2. Убедитесь, что все переменные окружения настроены
3. Проверьте доступность базы данных
4. Обратитесь к документации Vercel

---

**Успешного деплоя! 🎉**
