# AquaWiki API Документация

## 📖 Обзор

AquaWiki API - это RESTful API для управления контентом базы знаний о водных обитателях. API поддерживает многоязычность (азербайджанский, русский, английский) и предоставляет полный CRUD функционал для категорий, подкатегорий и статей.

## 🚀 Быстрый старт

### Запуск сервера

```bash
npm run dev
```

Сервер запустится на `http://localhost:3000`

### Swagger документация

Интерактивная документация доступна по адресу: `http://localhost:3000/docs`

## 📋 Эндпоинты

### Категории (Categories)

#### GET /categories

Получить список всех категорий

**Параметры:**

- `locale` (query, опционально) - язык для переводов (`az`, `ru`, `en`). По умолчанию `ru`

**Пример запроса:**

```bash
curl "http://localhost:3000/categories?locale=ru"
```

**Ответ:**

```json
{
  "statusCode": 200,
  "statusMessage": "Success",
  "categories": [
    {
      "id": "category_id",
      "translations": [
        {
          "id": "translation_id",
          "locale": "ru",
          "title": "Рыба",
          "description": "О рыбе"
        }
      ]
    }
  ]
}
```

#### POST /categories/category

Создать новую категорию

**Тело запроса:**

```json
{
  "translations": {
    "az": {
      "title": "Balıq",
      "description": "Balıq haqqında"
    },
    "ru": {
      "title": "Рыба",
      "description": "О рыбе"
    },
    "en": {
      "title": "Fish",
      "description": "About fish"
    }
  }
}
```

**Ответ:**

```json
{
  "statusCode": 200,
  "statusMessage": "Created",
  "categoryId": "new_category_id"
}
```

#### PATCH /categories/category

Обновить существующую категорию

**Тело запроса:**

```json
{
  "id": "category_id",
  "translations": {
    "az": {
      "title": "Balıq",
      "description": "Balıq haqqında"
    },
    "ru": {
      "title": "Рыба",
      "description": "О рыбе"
    },
    "en": {
      "title": "Fish",
      "description": "About fish"
    }
  }
}
```

#### DELETE /categories/category/{id}

Удалить категорию

**Пример запроса:**

```bash
curl -X DELETE "http://localhost:3000/categories/category/category_id"
```

### Подкатегории (SubCategories)

#### GET /subcategories

Получить список всех подкатегорий

**Параметры:**

- `locale` (query, опционально) - язык для переводов (`az`, `ru`, `en`). По умолчанию `ru`

#### POST /subcategories/subcategory

Создать новую подкатегорию

**Тело запроса:**

```json
{
  "translations": {
    "az": {
      "title": "Dəniz balığı",
      "description": "Dəniz balığı haqqında"
    },
    "ru": {
      "title": "Морская рыба",
      "description": "О морской рыбе"
    },
    "en": {
      "title": "Sea fish",
      "description": "About sea fish"
    }
  }
}
```

#### PATCH /subcategories/subcategory

Обновить существующую подкатегорию

#### DELETE /subcategories/subcategory/{id}

Удалить подкатегорию

### Статьи (Articles)

#### GET /articles

Получить список всех статей

**Параметры:**

- `locale` (query, опционально) - язык для переводов (`az`, `ru`, `en`). По умолчанию `ru`
- `subCategoryId` (query, опционально) - фильтр по ID подкатегории

**Пример запроса:**

```bash
curl "http://localhost:3000/articles?locale=ru&subCategoryId=subcategory_id"
```

**Ответ:**

```json
{
  "statusCode": 200,
  "statusMessage": "Success",
  "articles": [
    {
      "id": "article_id",
      "subCategoryId": "subcategory_id",
      "title": "Виды рыб",
      "description": "О различных видах рыб",
      "subCategory": {
        "id": "subcategory_id",
        "title": "Морская рыба",
        "description": "О морской рыбе"
      },
      "images": [
        {
          "id": "image_id",
          "url": "https://example.com/image.jpg",
          "uploadedAt": "2024-01-01T00:00:00.000Z"
        }
      ]
    }
  ]
}
```

#### GET /articles/article/{id}

Получить статью по ID

**Параметры:**

- `id` (path) - ID статьи
- `locale` (query, опционально) - язык для переводов

#### POST /articles/article

Создать новую статью

**Тело запроса:**

```json
{
  "subCategoryId": "subcategory_id",
  "translations": {
    "az": {
      "title": "Balıq növləri",
      "description": "Müxtəlif balıq növləri haqqında"
    },
    "ru": {
      "title": "Виды рыб",
      "description": "О различных видах рыб"
    },
    "en": {
      "title": "Fish species",
      "description": "About different fish species"
    }
  },
  "images": ["https://example.com/image1.jpg", "https://example.com/image2.jpg"]
}
```

#### PATCH /articles/article

Обновить существующую статью

**Тело запроса:**

```json
{
  "id": "article_id",
  "subCategoryId": "new_subcategory_id",
  "translations": {
    "az": {
      "title": "Balıq növləri",
      "description": "Müxtəlif balıq növləri haqqında"
    },
    "ru": {
      "title": "Виды рыб",
      "description": "О различных видах рыб"
    },
    "en": {
      "title": "Fish species",
      "description": "About different fish species"
    }
  },
  "images": ["https://example.com/new_image.jpg"]
}
```

#### DELETE /articles/article/{id}

Удалить статью

## 🔧 Коды ответов

- `200` - Успешный запрос
- `404` - Ресурс не найден
- `500` - Внутренняя ошибка сервера

## 📝 Структура ответов

### Успешный ответ

```json
{
  "statusCode": 200,
  "statusMessage": "Success",
  "data": {}
}
```

### Ответ с ошибкой

```json
{
  "statusCode": 500,
  "statusMessage": "Server Error",
  "error": "Описание ошибки"
}
```

## 🌐 Поддерживаемые языки

- `az` - Азербайджанский
- `ru` - Русский (по умолчанию)
- `en` - Английский

## 🗄️ База данных

API использует PostgreSQL с Prisma ORM. Схема базы данных включает:

- **Categories** - категории контента
- **SubCategories** - подкатегории
- **Articles** - статьи
- **TranslationCategory** - переводы категорий
- **TranslationSubCategory** - переводы подкатегорий
- **TranslationArticle** - переводы статей
- **ArticleImages** - изображения статей

## 🚀 Примеры использования

### Создание полной структуры контента

1. **Создать категорию:**

```bash
curl -X POST "http://localhost:3000/categories/category" \
  -H "Content-Type: application/json" \
  -d '{
    "translations": {
      "az": {"title": "Balıq", "description": "Balıq haqqında"},
      "ru": {"title": "Рыба", "description": "О рыбе"},
      "en": {"title": "Fish", "description": "About fish"}
    }
  }'
```

2. **Создать подкатегорию:**

```bash
curl -X POST "http://localhost:3000/subcategories/subcategory" \
  -H "Content-Type: application/json" \
  -d '{
    "translations": {
      "az": {"title": "Dəniz balığı", "description": "Dəniz balığı haqqında"},
      "ru": {"title": "Морская рыба", "description": "О морской рыбе"},
      "en": {"title": "Sea fish", "description": "About sea fish"}
    }
  }'
```

3. **Создать статью:**

```bash
curl -X POST "http://localhost:3000/articles/article" \
  -H "Content-Type: application/json" \
  -d '{
    "subCategoryId": "subcategory_id",
    "translations": {
      "az": {"title": "Balıq növləri", "description": "Müxtəlif balıq növləri"},
      "ru": {"title": "Виды рыб", "description": "О различных видах рыб"},
      "en": {"title": "Fish species", "description": "About different fish species"}
    },
    "images": ["https://example.com/image1.jpg"]
  }'
```

## 📚 Дополнительные ресурсы

- **Swagger UI**: `http://localhost:3000/docs`
- **OpenAPI спецификация**: `http://localhost:3000/api-docs`
- **Исходный код**: GitHub репозиторий проекта
