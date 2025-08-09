import { z } from 'zod';
// Схемы для валидации
const TranslationSchema = z.object({
    title: z.string().describe('Заголовок'),
    description: z.string().describe('Описание')
});
const CategoryTranslationSchema = z.object({
    az: TranslationSchema,
    ru: TranslationSchema,
    en: TranslationSchema
});
const SubCategoryTranslationSchema = z.object({
    az: TranslationSchema,
    ru: TranslationSchema,
    en: TranslationSchema
});
const ArticleTranslationSchema = z.object({
    az: TranslationSchema,
    ru: TranslationSchema,
    en: TranslationSchema
});
const InhabitantTranslationSchema = z.object({
    az: z.object({ title: z.string().describe('Заголовок') }),
    ru: z.object({ title: z.string().describe('Заголовок') }),
    en: z.object({ title: z.string().describe('Заголовок') })
});
// Схемы для ответов
const CategoryResponseSchema = z.object({
    id: z.string(),
    translations: z.array(z.object({
        id: z.string(),
        locale: z.string(),
        title: z.string(),
        description: z.string()
    }))
});
const SubCategoryResponseSchema = z.object({
    id: z.string(),
    translations: z.array(z.object({
        id: z.string(),
        locale: z.string(),
        title: z.string(),
        description: z.string()
    }))
});
const ArticleResponseSchema = z.object({
    id: z.string(),
    title: z.string(),
    description: z.string(),
    subCategories: z.array(z.object({
        id: z.string(),
        title: z.string(),
        description: z.string()
    })),
    images: z.array(z.object({
        id: z.string(),
        url: z.string(),
        uploadedAt: z.string()
    }))
});
const InhabitantResponseSchema = z.object({
    id: z.string(),
    type: z.array(z.string()),
    subtype: z.string(),
    title: z.string(),
    imageUrl: z.string(),
    articleUrl: z.string()
});
const SuccessResponseSchema = z.object({
    statusCode: z.number(),
    statusMessage: z.string()
});
const ErrorResponseSchema = z.object({
    statusCode: z.number(),
    statusMessage: z.string(),
    error: z.string()
});
// Создаем OpenAPI спецификацию
const openApiConfig = {
    openapi: '3.0.0',
    info: {
        title: 'AquaWiki API',
        version: '2.0.0',
        description: `
# AquaWiki API - База знаний о водных обитателях

Этот API предоставляет полный набор эндпоинтов для управления контентом базы знаний о водных обитателях.

## Основные возможности:
- **Категории**: Создание, чтение, обновление и удаление категорий
- **Подкатегории**: Управление подкатегориями с привязкой к категориям
- **Статьи**: Полноценное управление статьями с переводами, изображениями и связями many-to-many с подкатегориями
- **Обитатели**: Управление информацией об обитателях аквариума с переводами
- **Мультиязычность**: Поддержка трех языков (азербайджанский, русский, английский)
- **Аутентификация**: Простая система токенов для безопасности

## Аутентификация:
API использует Bearer токены для аутентификации. Доступны два типа токенов:
- **Admin Token**: Для создания, обновления и удаления контента
- **Read Token**: Для чтения контента

## Поддерживаемые языки:
- **az**: Азербайджанский
- **ru**: Русский (по умолчанию)
- **en**: Английский
    `,
        contact: {
            name: 'AquaWiki Team',
            email: 'support@aquawiki.com',
            url: 'https://aquawiki.com'
        },
        license: {
            name: 'MIT',
            url: 'https://opensource.org/licenses/MIT'
        }
    },
    components: {
        securitySchemes: {
            BearerAuth: {
                type: 'http',
                scheme: 'bearer',
                bearerFormat: 'token',
                description: 'API токен для аутентификации. Используйте Bearer token в заголовке Authorization.'
            }
        },
        schemas: {
            Translation: TranslationSchema,
            CategoryTranslation: CategoryTranslationSchema,
            SubCategoryTranslation: SubCategoryTranslationSchema,
            ArticleTranslation: ArticleTranslationSchema,
            InhabitantTranslation: InhabitantTranslationSchema,
            CategoryResponse: CategoryResponseSchema,
            SubCategoryResponse: SubCategoryResponseSchema,
            ArticleResponse: ArticleResponseSchema,
            InhabitantResponse: InhabitantResponseSchema,
            SuccessResponse: SuccessResponseSchema,
            ErrorResponse: ErrorResponseSchema
        }
    },
    security: [
        {
            BearerAuth: []
        }
    ],
    servers: [
        {
            url: 'http://localhost:3000',
            description: 'Локальный сервер разработки'
        },
        {
            url: 'https://aqua-wiki-backend.vercel.app/',
            description: 'Продакшн сервер (Vercel)'
        }
    ],
    tags: [
        {
            name: 'Authentication',
            description: 'Аутентификация и токены'
        },
        {
            name: 'Categories',
            description: 'Операции с категориями'
        },
        {
            name: 'SubCategories',
            description: 'Операции с подкатегориями'
        },
        {
            name: 'Articles',
            description: 'Операции со статьями'
        },
        {
            name: 'Inhabitants',
            description: 'Операции с обитателями аквариума'
        }
    ],
    paths: {
        // Генерация токенов
        '/tokens/generate': {
            post: {
                tags: ['Authentication'],
                summary: 'Сгенерировать новые API токены',
                description: 'Генерирует новые админский и читательский токены для доступа к API',
                responses: {
                    '200': {
                        description: 'Токены успешно сгенерированы',
                        content: {
                            'application/json': {
                                schema: {
                                    type: 'object',
                                    properties: {
                                        statusCode: { type: 'number', example: 200 },
                                        statusMessage: { type: 'string', example: 'Tokens generated successfully' },
                                        tokens: {
                                            type: 'object',
                                            properties: {
                                                adminToken: { type: 'string' },
                                                readToken: { type: 'string' }
                                            }
                                        },
                                        instructions: {
                                            type: 'object',
                                            properties: {
                                                adminToken: { type: 'string' },
                                                readToken: { type: 'string' },
                                                nextSteps: {
                                                    type: 'array',
                                                    items: { type: 'string' }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    },
                    '500': {
                        description: 'Ошибка сервера',
                        content: {
                            'application/json': {
                                schema: ErrorResponseSchema
                            }
                        }
                    }
                }
            }
        },
        // Категории
        '/categories': {
            get: {
                tags: ['Categories'],
                summary: 'Получить список всех категорий',
                description: 'Возвращает список всех категорий с переводами на указанном языке',
                parameters: [
                    {
                        name: 'locale',
                        in: 'query',
                        description: 'Язык для переводов (az, ru, en)',
                        schema: {
                            type: 'string',
                            enum: ['az', 'ru', 'en'],
                            default: 'ru'
                        }
                    }
                ],
                responses: {
                    '200': {
                        description: 'Успешный ответ',
                        content: {
                            'application/json': {
                                schema: {
                                    type: 'object',
                                    properties: {
                                        statusCode: { type: 'number', example: 200 },
                                        statusMessage: { type: 'string', example: 'Success' },
                                        categories: {
                                            type: 'array',
                                            items: CategoryResponseSchema
                                        }
                                    }
                                }
                            }
                        }
                    },
                    '500': {
                        description: 'Ошибка сервера',
                        content: {
                            'application/json': {
                                schema: ErrorResponseSchema
                            }
                        }
                    }
                }
            }
        },
        '/categories/category': {
            post: {
                tags: ['Categories'],
                summary: 'Создать новую категорию',
                description: 'Создает новую категорию с переводами на трех языках',
                requestBody: {
                    required: true,
                    content: {
                        'application/json': {
                            schema: {
                                type: 'object',
                                properties: {
                                    translations: CategoryTranslationSchema
                                },
                                required: ['translations'],
                                example: {
                                    translations: {
                                        az: { title: 'Balıq', description: 'Balıq haqqında' },
                                        ru: { title: 'Рыба', description: 'О рыбе' },
                                        en: { title: 'Fish', description: 'About fish' }
                                    }
                                }
                            }
                        }
                    }
                },
                responses: {
                    '200': {
                        description: 'Категория создана',
                        content: {
                            'application/json': {
                                schema: {
                                    type: 'object',
                                    properties: {
                                        statusCode: { type: 'number', example: 200 },
                                        statusMessage: { type: 'string', example: 'Created' },
                                        categoryId: { type: 'string' }
                                    }
                                }
                            }
                        }
                    },
                    '500': {
                        description: 'Ошибка сервера',
                        content: {
                            'application/json': {
                                schema: ErrorResponseSchema
                            }
                        }
                    }
                }
            },
            patch: {
                tags: ['Categories'],
                summary: 'Обновить категорию',
                description: 'Обновляет существующую категорию с новыми переводами',
                requestBody: {
                    required: true,
                    content: {
                        'application/json': {
                            schema: {
                                type: 'object',
                                properties: {
                                    id: { type: 'string' },
                                    translations: CategoryTranslationSchema
                                },
                                required: ['id', 'translations'],
                                example: {
                                    id: 'category_id',
                                    translations: {
                                        az: { title: 'Balıq', description: 'Balıq haqqında' },
                                        ru: { title: 'Рыба', description: 'О рыбе' },
                                        en: { title: 'Fish', description: 'About fish' }
                                    }
                                }
                            }
                        }
                    }
                },
                responses: {
                    '200': {
                        description: 'Категория обновлена',
                        content: {
                            'application/json': {
                                schema: {
                                    type: 'object',
                                    properties: {
                                        statusCode: { type: 'number', example: 200 },
                                        statusMessage: { type: 'string', example: 'Updated' },
                                        categoryId: { type: 'string' }
                                    }
                                }
                            }
                        }
                    },
                    '404': {
                        description: 'Категория не найдена',
                        content: {
                            'application/json': {
                                schema: ErrorResponseSchema
                            }
                        }
                    },
                    '500': {
                        description: 'Ошибка сервера',
                        content: {
                            'application/json': {
                                schema: ErrorResponseSchema
                            }
                        }
                    }
                }
            }
        },
        '/categories/category/{id}': {
            delete: {
                tags: ['Categories'],
                summary: 'Удалить категорию',
                description: 'Удаляет категорию по ID',
                parameters: [
                    {
                        name: 'id',
                        in: 'path',
                        required: true,
                        description: 'ID категории',
                        schema: { type: 'string' }
                    }
                ],
                responses: {
                    '200': {
                        description: 'Категория удалена',
                        content: {
                            'application/json': {
                                schema: SuccessResponseSchema
                            }
                        }
                    },
                    '500': {
                        description: 'Ошибка сервера',
                        content: {
                            'application/json': {
                                schema: ErrorResponseSchema
                            }
                        }
                    }
                }
            }
        },
        // Подкатегории
        '/subcategories': {
            get: {
                tags: ['SubCategories'],
                summary: 'Получить список всех подкатегорий',
                description: 'Возвращает список всех подкатегорий с переводами на указанном языке',
                parameters: [
                    {
                        name: 'locale',
                        in: 'query',
                        description: 'Язык для переводов (az, ru, en)',
                        schema: {
                            type: 'string',
                            enum: ['az', 'ru', 'en'],
                            default: 'ru'
                        }
                    }
                ],
                responses: {
                    '200': {
                        description: 'Успешный ответ',
                        content: {
                            'application/json': {
                                schema: {
                                    type: 'object',
                                    properties: {
                                        statusCode: { type: 'number', example: 200 },
                                        statusMessage: { type: 'string', example: 'Success' },
                                        subcategories: {
                                            type: 'array',
                                            items: SubCategoryResponseSchema
                                        }
                                    }
                                }
                            }
                        }
                    },
                    '500': {
                        description: 'Ошибка сервера',
                        content: {
                            'application/json': {
                                schema: ErrorResponseSchema
                            }
                        }
                    }
                }
            }
        },
        '/subcategories/subcategory': {
            post: {
                tags: ['SubCategories'],
                summary: 'Создать новую подкатегорию',
                description: 'Создает новую подкатегорию с переводами на трех языках',
                requestBody: {
                    required: true,
                    content: {
                        'application/json': {
                            schema: {
                                type: 'object',
                                properties: {
                                    translations: SubCategoryTranslationSchema
                                },
                                required: ['translations'],
                                example: {
                                    translations: {
                                        az: { title: 'Dəniz balığı', description: 'Dəniz balığı haqqında' },
                                        ru: { title: 'Морская рыба', description: 'О морской рыбе' },
                                        en: { title: 'Sea fish', description: 'About sea fish' }
                                    }
                                }
                            }
                        }
                    }
                },
                responses: {
                    '200': {
                        description: 'Подкатегория создана',
                        content: {
                            'application/json': {
                                schema: {
                                    type: 'object',
                                    properties: {
                                        statusCode: { type: 'number', example: 200 },
                                        statusMessage: { type: 'string', example: 'Created' },
                                        subcategoryId: { type: 'string' }
                                    }
                                }
                            }
                        }
                    },
                    '500': {
                        description: 'Ошибка сервера',
                        content: {
                            'application/json': {
                                schema: ErrorResponseSchema
                            }
                        }
                    }
                }
            },
            patch: {
                tags: ['SubCategories'],
                summary: 'Обновить подкатегорию',
                description: 'Обновляет существующую подкатегорию с новыми переводами',
                requestBody: {
                    required: true,
                    content: {
                        'application/json': {
                            schema: {
                                type: 'object',
                                properties: {
                                    id: { type: 'string' },
                                    translations: SubCategoryTranslationSchema
                                },
                                required: ['id', 'translations'],
                                example: {
                                    id: 'subcategory_id',
                                    translations: {
                                        az: { title: 'Dəniz balığı', description: 'Dəniz balığı haqqında' },
                                        ru: { title: 'Морская рыба', description: 'О морской рыбе' },
                                        en: { title: 'Sea fish', description: 'About sea fish' }
                                    }
                                }
                            }
                        }
                    }
                },
                responses: {
                    '200': {
                        description: 'Подкатегория обновлена',
                        content: {
                            'application/json': {
                                schema: {
                                    type: 'object',
                                    properties: {
                                        statusCode: { type: 'number', example: 200 },
                                        statusMessage: { type: 'string', example: 'Updated' },
                                        subcategoryId: { type: 'string' }
                                    }
                                }
                            }
                        }
                    },
                    '404': {
                        description: 'Подкатегория не найдена',
                        content: {
                            'application/json': {
                                schema: ErrorResponseSchema
                            }
                        }
                    },
                    '500': {
                        description: 'Ошибка сервера',
                        content: {
                            'application/json': {
                                schema: ErrorResponseSchema
                            }
                        }
                    }
                }
            }
        },
        '/subcategories/subcategory/{id}': {
            delete: {
                tags: ['SubCategories'],
                summary: 'Удалить подкатегорию',
                description: 'Удаляет подкатегорию по ID',
                parameters: [
                    {
                        name: 'id',
                        in: 'path',
                        required: true,
                        description: 'ID подкатегории',
                        schema: { type: 'string' }
                    }
                ],
                responses: {
                    '200': {
                        description: 'Подкатегория удалена',
                        content: {
                            'application/json': {
                                schema: SuccessResponseSchema
                            }
                        }
                    },
                    '500': {
                        description: 'Ошибка сервера',
                        content: {
                            'application/json': {
                                schema: ErrorResponseSchema
                            }
                        }
                    }
                }
            }
        },
        // Статьи
        '/articles': {
            get: {
                tags: ['Articles'],
                summary: 'Получить список всех статей',
                description: 'Возвращает список всех статей с переводами, изображениями и информацией о подкатегории',
                parameters: [
                    {
                        name: 'locale',
                        in: 'query',
                        description: 'Язык для переводов (az, ru, en)',
                        schema: {
                            type: 'string',
                            enum: ['az', 'ru', 'en'],
                            default: 'ru'
                        }
                    },
                    {
                        name: 'subCategoryId',
                        in: 'query',
                        description: 'Фильтр по ID подкатегории',
                        schema: { type: 'string' }
                    }
                ],
                responses: {
                    '200': {
                        description: 'Успешный ответ',
                        content: {
                            'application/json': {
                                schema: {
                                    type: 'object',
                                    properties: {
                                        statusCode: { type: 'number', example: 200 },
                                        statusMessage: { type: 'string', example: 'Success' },
                                        articles: {
                                            type: 'array',
                                            items: ArticleResponseSchema
                                        }
                                    }
                                }
                            }
                        }
                    },
                    '500': {
                        description: 'Ошибка сервера',
                        content: {
                            'application/json': {
                                schema: ErrorResponseSchema
                            }
                        }
                    }
                }
            }
        },
        '/articles/article': {
            post: {
                tags: ['Articles'],
                summary: 'Создать новую статью',
                description: 'Создает новую статью с переводами, изображениями и привязкой к подкатегориям (many-to-many)',
                requestBody: {
                    required: true,
                    content: {
                        'application/json': {
                            schema: {
                                type: 'object',
                                properties: {
                                    subCategoryIds: {
                                        type: 'array',
                                        items: { type: 'string' },
                                        description: 'Массив ID подкатегорий'
                                    },
                                    translations: ArticleTranslationSchema,
                                    images: {
                                        type: 'array',
                                        items: { type: 'string' },
                                        description: 'Массив URL изображений'
                                    }
                                },
                                required: ['subCategoryIds', 'translations'],
                                example: {
                                    subCategoryIds: ['subcategory_id_1', 'subcategory_id_2'],
                                    translations: {
                                        az: { title: 'Balıq növləri', description: 'Müxtəlif balıq növləri haqqında' },
                                        ru: { title: 'Виды рыб', description: 'О различных видах рыб' },
                                        en: { title: 'Fish species', description: 'About different fish species' }
                                    },
                                    images: ['https://example.com/image1.jpg', 'https://example.com/image2.jpg']
                                }
                            }
                        }
                    }
                },
                responses: {
                    '200': {
                        description: 'Статья создана',
                        content: {
                            'application/json': {
                                schema: {
                                    type: 'object',
                                    properties: {
                                        statusCode: { type: 'number', example: 200 },
                                        statusMessage: { type: 'string', example: 'Created' },
                                        articleId: { type: 'string' }
                                    }
                                }
                            }
                        }
                    },
                    '404': {
                        description: 'Подкатегория не найдена',
                        content: {
                            'application/json': {
                                schema: ErrorResponseSchema
                            }
                        }
                    },
                    '500': {
                        description: 'Ошибка сервера',
                        content: {
                            'application/json': {
                                schema: ErrorResponseSchema
                            }
                        }
                    }
                }
            },
            patch: {
                tags: ['Articles'],
                summary: 'Обновить статью',
                description: 'Обновляет существующую статью с новыми переводами, изображениями или подкатегориями',
                requestBody: {
                    required: true,
                    content: {
                        'application/json': {
                            schema: {
                                type: 'object',
                                properties: {
                                    id: { type: 'string', description: 'ID статьи' },
                                    subCategoryIds: {
                                        type: 'array',
                                        items: { type: 'string' },
                                        description: 'Массив ID подкатегорий'
                                    },
                                    translations: ArticleTranslationSchema,
                                    images: {
                                        type: 'array',
                                        items: { type: 'string' },
                                        description: 'Массив URL изображений'
                                    }
                                },
                                required: ['id'],
                                example: {
                                    id: 'article_id',
                                    subCategoryIds: ['new_subcategory_id_1', 'new_subcategory_id_2'],
                                    translations: {
                                        az: { title: 'Balıq növləri', description: 'Müxtəlif balıq növləri haqqında' },
                                        ru: { title: 'Виды рыб', description: 'О различных видах рыб' },
                                        en: { title: 'Fish species', description: 'About different fish species' }
                                    },
                                    images: ['https://example.com/new_image1.jpg']
                                }
                            }
                        }
                    }
                },
                responses: {
                    '200': {
                        description: 'Статья обновлена',
                        content: {
                            'application/json': {
                                schema: {
                                    type: 'object',
                                    properties: {
                                        statusCode: { type: 'number', example: 200 },
                                        statusMessage: { type: 'string', example: 'Updated' },
                                        articleId: { type: 'string' }
                                    }
                                }
                            }
                        }
                    },
                    '404': {
                        description: 'Статья или подкатегория не найдена',
                        content: {
                            'application/json': {
                                schema: ErrorResponseSchema
                            }
                        }
                    },
                    '500': {
                        description: 'Ошибка сервера',
                        content: {
                            'application/json': {
                                schema: ErrorResponseSchema
                            }
                        }
                    }
                }
            }
        },
        '/articles/article/{id}': {
            get: {
                tags: ['Articles'],
                summary: 'Получить статью по ID',
                description: 'Возвращает конкретную статью с полной информацией',
                parameters: [
                    {
                        name: 'id',
                        in: 'path',
                        required: true,
                        description: 'ID статьи',
                        schema: { type: 'string' }
                    },
                    {
                        name: 'locale',
                        in: 'query',
                        description: 'Язык для переводов (az, ru, en)',
                        schema: {
                            type: 'string',
                            enum: ['az', 'ru', 'en'],
                            default: 'ru'
                        }
                    }
                ],
                responses: {
                    '200': {
                        description: 'Успешный ответ',
                        content: {
                            'application/json': {
                                schema: {
                                    type: 'object',
                                    properties: {
                                        statusCode: { type: 'number', example: 200 },
                                        statusMessage: { type: 'string', example: 'Success' },
                                        article: ArticleResponseSchema
                                    }
                                }
                            }
                        }
                    },
                    '404': {
                        description: 'Статья не найдена',
                        content: {
                            'application/json': {
                                schema: ErrorResponseSchema
                            }
                        }
                    },
                    '500': {
                        description: 'Ошибка сервера',
                        content: {
                            'application/json': {
                                schema: ErrorResponseSchema
                            }
                        }
                    }
                }
            },
            delete: {
                tags: ['Articles'],
                summary: 'Удалить статью',
                description: 'Удаляет статью по ID вместе со всеми переводами и изображениями',
                parameters: [
                    {
                        name: 'id',
                        in: 'path',
                        required: true,
                        description: 'ID статьи',
                        schema: { type: 'string' }
                    }
                ],
                responses: {
                    '200': {
                        description: 'Статья удалена',
                        content: {
                            'application/json': {
                                schema: {
                                    type: 'object',
                                    properties: {
                                        statusCode: { type: 'number', example: 200 },
                                        statusMessage: { type: 'string', example: 'Deleted' },
                                        articleId: { type: 'string' }
                                    }
                                }
                            }
                        }
                    },
                    '404': {
                        description: 'Статья не найдена',
                        content: {
                            'application/json': {
                                schema: ErrorResponseSchema
                            }
                        }
                    },
                    '500': {
                        description: 'Ошибка сервера',
                        content: {
                            'application/json': {
                                schema: ErrorResponseSchema
                            }
                        }
                    }
                }
            }
        },
        // Обитатели
        '/inhabitants': {
            get: {
                tags: ['Inhabitants'],
                summary: 'Получить список всех обитателей',
                description: 'Возвращает список всех обитателей с переводами на указанном языке',
                parameters: [
                    {
                        name: 'locale',
                        in: 'query',
                        description: 'Язык для переводов (az, ru, en)',
                        schema: {
                            type: 'string',
                            enum: ['az', 'ru', 'en'],
                            default: 'ru'
                        }
                    },
                    {
                        name: 'type',
                        in: 'query',
                        description: 'Фильтр по типу обитателя',
                        schema: { type: 'string' }
                    }
                ],
                responses: {
                    '200': {
                        description: 'Успешный ответ',
                        content: {
                            'application/json': {
                                schema: {
                                    type: 'object',
                                    properties: {
                                        statusCode: { type: 'number', example: 200 },
                                        statusMessage: { type: 'string', example: 'Success' },
                                        inhabitants: {
                                            type: 'array',
                                            items: InhabitantResponseSchema
                                        }
                                    }
                                }
                            }
                        }
                    },
                    '500': {
                        description: 'Ошибка сервера',
                        content: {
                            'application/json': {
                                schema: ErrorResponseSchema
                            }
                        }
                    }
                }
            }
        },
        '/inhabitants/inhabitant': {
            post: {
                tags: ['Inhabitants'],
                summary: 'Создать нового обитателя',
                description: 'Создает нового обитателя с переводами на трех языках',
                requestBody: {
                    required: true,
                    content: {
                        'application/json': {
                            schema: {
                                type: 'object',
                                properties: {
                                    type: {
                                        type: 'array',
                                        items: { type: 'string' },
                                        description: 'Типы обитателя (массив)'
                                    },
                                    subtype: { type: 'string', description: 'Подтип обитателя' },
                                    translations: InhabitantTranslationSchema,
                                    imageUrl: { type: 'string', format: 'uri', description: 'URL изображения' },
                                    articleUrl: { type: 'string', format: 'uri', description: 'URL статьи' }
                                },
                                required: ['type', 'subtype', 'translations', 'imageUrl', 'articleUrl'],
                                example: {
                                    type: ['FRESHWATER', 'SALTWATER'],
                                    subtype: 'FISHS',
                                    translations: {
                                        az: { title: 'Tropik balıq' },
                                        ru: { title: 'Тропическая рыба' },
                                        en: { title: 'Tropical fish' }
                                    },
                                    imageUrl: 'https://example.com/fish.jpg',
                                    articleUrl: 'https://example.com/article'
                                }
                            }
                        }
                    }
                },
                responses: {
                    '200': {
                        description: 'Обитатель создан',
                        content: {
                            'application/json': {
                                schema: {
                                    type: 'object',
                                    properties: {
                                        statusCode: { type: 'number', example: 200 },
                                        statusMessage: { type: 'string', example: 'Created' },
                                        inhabitantId: { type: 'string' }
                                    }
                                }
                            }
                        }
                    },
                    '500': {
                        description: 'Ошибка сервера',
                        content: {
                            'application/json': {
                                schema: ErrorResponseSchema
                            }
                        }
                    }
                }
            },
            patch: {
                tags: ['Inhabitants'],
                summary: 'Обновить обитателя',
                description: 'Обновляет существующего обитателя с новыми данными',
                requestBody: {
                    required: true,
                    content: {
                        'application/json': {
                            schema: {
                                type: 'object',
                                properties: {
                                    id: { type: 'string', description: 'ID обитателя' },
                                    type: {
                                        type: 'array',
                                        items: { type: 'string' },
                                        description: 'Типы обитателя (массив)'
                                    },
                                    subtype: { type: 'string', description: 'Подтип обитателя' },
                                    translations: InhabitantTranslationSchema,
                                    imageUrl: { type: 'string', format: 'uri', description: 'URL изображения' },
                                    articleUrl: { type: 'string', format: 'uri', description: 'URL статьи' }
                                },
                                required: ['id'],
                                example: {
                                    id: 'inhabitant_id',
                                    type: ['FRESHWATER'],
                                    subtype: 'FISHS',
                                    translations: {
                                        az: { title: 'Yeni tropik balıq' },
                                        ru: { title: 'Новая тропическая рыба' },
                                        en: { title: 'New tropical fish' }
                                    },
                                    imageUrl: 'https://example.com/new_fish.jpg',
                                    articleUrl: 'https://example.com/new_article'
                                }
                            }
                        }
                    }
                },
                responses: {
                    '200': {
                        description: 'Обитатель обновлен',
                        content: {
                            'application/json': {
                                schema: {
                                    type: 'object',
                                    properties: {
                                        statusCode: { type: 'number', example: 200 },
                                        statusMessage: { type: 'string', example: 'Updated' },
                                        inhabitantId: { type: 'string' }
                                    }
                                }
                            }
                        }
                    },
                    '404': {
                        description: 'Обитатель не найден',
                        content: {
                            'application/json': {
                                schema: ErrorResponseSchema
                            }
                        }
                    },
                    '500': {
                        description: 'Ошибка сервера',
                        content: {
                            'application/json': {
                                schema: ErrorResponseSchema
                            }
                        }
                    }
                }
            }
        },
        '/inhabitants/inhabitant/{id}': {
            get: {
                tags: ['Inhabitants'],
                summary: 'Получить обитателя по ID',
                description: 'Возвращает конкретного обитателя с полной информацией',
                parameters: [
                    {
                        name: 'id',
                        in: 'path',
                        required: true,
                        description: 'ID обитателя',
                        schema: { type: 'string' }
                    },
                    {
                        name: 'locale',
                        in: 'query',
                        description: 'Язык для переводов (az, ru, en)',
                        schema: {
                            type: 'string',
                            enum: ['az', 'ru', 'en'],
                            default: 'ru'
                        }
                    }
                ],
                responses: {
                    '200': {
                        description: 'Успешный ответ',
                        content: {
                            'application/json': {
                                schema: {
                                    type: 'object',
                                    properties: {
                                        statusCode: { type: 'number', example: 200 },
                                        statusMessage: { type: 'string', example: 'Success' },
                                        inhabitant: InhabitantResponseSchema
                                    }
                                }
                            }
                        }
                    },
                    '404': {
                        description: 'Обитатель не найден',
                        content: {
                            'application/json': {
                                schema: ErrorResponseSchema
                            }
                        }
                    },
                    '500': {
                        description: 'Ошибка сервера',
                        content: {
                            'application/json': {
                                schema: ErrorResponseSchema
                            }
                        }
                    }
                }
            },
            delete: {
                tags: ['Inhabitants'],
                summary: 'Удалить обитателя',
                description: 'Удаляет обитателя по ID вместе со всеми переводами',
                parameters: [
                    {
                        name: 'id',
                        in: 'path',
                        required: true,
                        description: 'ID обитателя',
                        schema: { type: 'string' }
                    }
                ],
                responses: {
                    '200': {
                        description: 'Обитатель удален',
                        content: {
                            'application/json': {
                                schema: {
                                    type: 'object',
                                    properties: {
                                        statusCode: { type: 'number', example: 200 },
                                        statusMessage: { type: 'string', example: 'Deleted' },
                                        inhabitantId: { type: 'string' }
                                    }
                                }
                            }
                        }
                    },
                    '404': {
                        description: 'Обитатель не найден',
                        content: {
                            'application/json': {
                                schema: ErrorResponseSchema
                            }
                        }
                    },
                    '500': {
                        description: 'Ошибка сервера',
                        content: {
                            'application/json': {
                                schema: ErrorResponseSchema
                            }
                        }
                    }
                }
            }
        }
    }
};
export { openApiConfig };
