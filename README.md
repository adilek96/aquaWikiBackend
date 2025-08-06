# AquaWiki API

🚀 **Полнофункциональный REST API для базы знаний о водных обитателях**

## 📋 Описание

AquaWiki API - это современный RESTful API, построенный на Node.js с использованием Hono framework и Prisma ORM. API предоставляет полный набор функций для управления контентом базы знаний о водных обитателях с поддержкой мультиязычности.

## ✨ Основные возможности

- 🔐 **Аутентификация**: Простая система токенов (Admin/Read)
- 🌍 **Мультиязычность**: Поддержка азербайджанского, русского и английского языков
- 📂 **Категории**: Полный CRUD для категорий контента
- 📁 **Подкатегории**: Управление подкатегориями с привязкой к категориям
- 📄 **Статьи**: Создание статей с переводами и изображениями
- 🖼️ **Изображения**: Поддержка множественных изображений для статей
- 📚 **Swagger**: Интерактивная документация API
- 🗄️ **PostgreSQL**: Надежная база данных с Prisma ORM

## 🛠️ Технологии

- **Runtime**: Node.js 18+
- **Framework**: Hono
- **Database**: PostgreSQL + Prisma ORM
- **Validation**: Zod
- **Documentation**: Swagger/OpenAPI
- **Language**: TypeScript

## 🚀 Быстрый старт

### Предварительные требования

- Node.js 18+ 
- PostgreSQL
- npm или yarn

### Установка

1. **Клонируйте репозиторий**:
```bash
git clone https://github.com/your-username/aquaWikiBackend.git
cd aquaWikiBackend
```

2. **Установите зависимости**:
```bash
npm install
```

3. **Настройте базу данных**:
```bash
# Создайте .env файл
cp .env.example .env

# Отредактируйте DATABASE_URL в .env
DATABASE_URL="postgresql://username:password@localhost:5432/aquawiki"
```

4. **Примените миграции**:
```bash
npx prisma generate
npx prisma db push
```

5. **Запустите сервер**:
```bash
npm run dev
```

Сервер будет доступен по адресу: `http://localhost:3000`

## 📚 Документация

### Swagger UI
Интерактивная документация доступна по адресу: `http://localhost:3000/docs`

### API Документация
Полная документация API: [API_DOCUMENTATION.md](./API_DOCUMENTATION.md)

### Настройка токенов
Инструкции по настройке аутентификации: [TOKEN_SETUP.md](./TOKEN_SETUP.md)

## 🔐 Аутентификация

API использует простую систему токенов:

1. **Сгенерируйте токены**:
```bash
curl -X POST http://localhost:3000/tokens/generate
```

2. **Используйте токены**:
```bash
# Для админских операций
Authorization: Bearer YOUR_ADMIN_TOKEN

# Для чтения
Authorization: Bearer YOUR_READ_TOKEN
```

## 📁 Структура проекта

```
aquaWikiBackend/
├── src/
│   ├── routes/           # API роуты
│   │   ├── categories/   # Категории
│   │   ├── subcategories/ # Подкатегории
│   │   ├── articles/     # Статьи
│   │   └── tokens/       # Аутентификация
│   ├── middleware/       # Middleware
│   ├── config/          # Конфигурация
│   ├── lib/             # Утилиты
│   └── swagger.ts       # Swagger документация
├── prisma/
│   └── schema.prisma    # Схема базы данных
├── API_DOCUMENTATION.md # Документация API
├── TOKEN_SETUP.md       # Настройка токенов
└── README.md           # Этот файл
```

## 🌐 API Endpoints

### Аутентификация
- `POST /tokens/generate` - Генерация токенов

### Категории
- `GET /categories` - Получить все категории
- `POST /categories/category` - Создать категорию
- `PATCH /categories/category` - Обновить категорию
- `DELETE /categories/category/{id}` - Удалить категорию

### Подкатегории
- `GET /subcategories` - Получить все подкатегории
- `POST /subcategories/subcategory` - Создать подкатегорию
- `PATCH /subcategories/subcategory` - Обновить подкатегорию
- `DELETE /subcategories/subcategory/{id}` - Удалить подкатегорию

### Статьи
- `GET /articles` - Получить все статьи
- `GET /articles/article/{id}` - Получить статью по ID
- `POST /articles/article` - Создать статью
- `PATCH /articles/article` - Обновить статью
- `DELETE /articles/article/{id}` - Удалить статью

## 🗄️ База данных

Проект использует PostgreSQL с Prisma ORM. Основные модели:

- **Categories** - категории контента
- **SubCategories** - подкатегории
- **Articles** - статьи
- **Translation*** - переводы для всех сущностей
- **ArticleImages** - изображения статей

## 🚀 Деплой

### Локальный запуск
```bash
npm run dev
```

### Продакшн
```bash
npm run build
npm start
```

### Docker (опционально)
```bash
docker build -t aquawiki-api .
docker run -p 3000:3000 aquawiki-api
```

## 🤝 Вклад в проект

1. Форкните репозиторий
2. Создайте ветку для новой функции (`git checkout -b feature/amazing-feature`)
3. Закоммитьте изменения (`git commit -m 'Add amazing feature'`)
4. Запушьте в ветку (`git push origin feature/amazing-feature`)
5. Откройте Pull Request

## 📄 Лицензия

Этот проект лицензирован под MIT License - см. файл [LICENSE](LICENSE) для деталей.

## 🆘 Поддержка

- 📧 Email: support@aquawiki.com
- 📖 Документация: `http://localhost:3000/docs`
- 🐛 Issues: GitHub Issues

## 🙏 Благодарности

- [Hono](https://hono.dev/) - Быстрый веб-фреймворк
- [Prisma](https://www.prisma.io/) - Современный ORM
- [Zod](https://zod.dev/) - Валидация схем
- [Swagger](https://swagger.io/) - Документация API

---

**AquaWiki API** - Создано с ❤️ для изучения водных обитателей
