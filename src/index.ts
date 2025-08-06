
import { Hono } from 'hono'
import { PrismaClient } from '@prisma/client';
import { createMiddleware } from 'hono/factory'

// Импорт роутеров для категорий
import postCategory from './routes/categories/category/post.category.js'
import getCategories from './routes/categories/get.categories.js'
import patchCategory from './routes/categories/category/patch.category.js'
import deleteCategory from './routes/categories/category/delete.category.js'

// Импорт роутеров для подкатегорий
import postSubCategory from './routes/subcategories/subcategory/post.subcategory.js'
import getSubCategories from './routes/subcategories/get.subcategories.js'
import patchSubCategory from './routes/subcategories/subcategory/patch.subcategory.js'
import deleteSubCategory from './routes/subcategories/subcategory/delete.subcategory.js'

// Импорт роутеров для статей
import postArticle from './routes/articles/article/post.article.js'
import getArticles from './routes/articles/get.articles.js'
import getArticle from './routes/articles/article/get.article.js'
import patchArticle from './routes/articles/article/patch.article.js'
import deleteArticle from './routes/articles/article/delete.article.js'

// Импорт Swagger
import swaggerRouter from './routes/swagger.js'

// Импорт роутера для токенов
import tokenRouter from './routes/tokens/generate.tokens.js'

import { cors } from 'hono/cors'


interface HonoEnv {
  Variables: {
    prisma: PrismaClient; // Объявляем, что в Variables будет свойство 'prisma' типа PrismaClient
  }
}

const app = new Hono<HonoEnv>()
const prisma = new PrismaClient();

const prismaMidleware = createMiddleware<HonoEnv>(async (c, next) => {
  c.set('prisma',prisma)
  await next()
})

app.use(prismaMidleware) 

app.use('*', cors({
  origin: '*',
  allowMethods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'OPTIONS'],
}))

app.get('/', (c) => {
  return c.text('AquaWiki API - Добро пожаловать! Документация доступна по адресу: /docs')
})

// Swagger документация
app.route('/', swaggerRouter)

// Генерация токенов
app.route('/', tokenRouter)

// Роутеры для категорий
app.route('/', postCategory)
app.route('/', getCategories)
app.route('/', patchCategory)
app.route('/', deleteCategory)

// Роутеры для подкатегорий
app.route('/', postSubCategory)
app.route('/', getSubCategories)
app.route('/', patchSubCategory)
app.route('/', deleteSubCategory)

// Роутеры для статей
app.route('/', postArticle)
app.route('/', getArticles)
app.route('/', getArticle)
app.route('/', patchArticle)
app.route('/', deleteArticle)

// Отключение Prisma Client при завершении работы приложения
// Это важно для серверных сред, чтобы корректно закрыть соединения с БД.
process.on('beforeExit', async () => {
  await prisma.$disconnect();
});
process.on('SIGINT', async () => {
  await prisma.$disconnect();
  process.exit(0);
});
process.on('SIGTERM', async () => {
  await prisma.$disconnect();
  process.exit(0);
});

export default app