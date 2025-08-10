// api/index.ts
import { handle } from 'hono/vercel'
import { PrismaClient } from '@prisma/client'
import { Hono } from 'hono'
import { cors } from 'hono/cors'
import { HonoEnv } from '../src/lib/honoEnv.js'

// Инициализация Prisma Client для Vercel
const prisma = new PrismaClient({
  datasources: {
    db: {
      url: process.env.DATABASE_URL,
    },
  },
})

// Создаем Hono приложение
const app = new Hono<HonoEnv>()

// Добавляем CORS middleware
app.use('*', cors({
  origin: ['http://localhost:3000', 'https://your-vercel-app.vercel.app'],
  allowMethods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'OPTIONS'],
  allowHeaders: ['Content-Type', 'Authorization'],
  credentials: true,
}))

// Добавляем Prisma middleware
app.use('*', async (c, next) => {
  c.set('prisma', prisma)
  await next()
})

// Импортируем и регистрируем роуты
import getCategoriesRouter from '../src/routes/categories/get.categories.js'
import postCategoryRouter from '../src/routes/categories/category/post.category.js'
import patchCategoryRouter from '../src/routes/categories/category/patch.category.js'
import deleteCategoryRouter from '../src/routes/categories/category/delete.category.js'

import getSubcategoriesRouter from '../src/routes/subcategories/get.subcategories.js'
import postSubcategoryRouter from '../src/routes/subcategories/subcategory/post.subcategory.js'
import patchSubcategoryRouter from '../src/routes/subcategories/subcategory/patch.subcategory.js'
import deleteSubcategoryRouter from '../src/routes/subcategories/subcategory/delete.subcategory.js'

import getArticlesRouter from '../src/routes/articles/get.articles.js'
import getArticleRouter from '../src/routes/articles/article/get.article.js'
import postArticleRouter from '../src/routes/articles/article/post.article.js'
import patchArticleRouter from '../src/routes/articles/article/patch.article.js'
import deleteArticleRouter from '../src/routes/articles/article/delete.article.js'


import postImageRouter from '../src/routes/images/post.images.js'
import deleteImageRouter from '../src/routes/images/delete.images.js'

import generateTokensRouter from '../src/routes/tokens/generate.tokens.js'
import swaggerRouter from '../src/routes/swagger.js'

// Регистрируем роуты
app.route('/categories', getCategoriesRouter)
app.route('/categories/category', postCategoryRouter)
app.route('/categories/category', patchCategoryRouter)
app.route('/categories/category', deleteCategoryRouter)

app.route('/subcategories', getSubcategoriesRouter)
app.route('/subcategories/subcategory', postSubcategoryRouter)
app.route('/subcategories/subcategory', patchSubcategoryRouter)
app.route('/subcategories/subcategory', deleteSubcategoryRouter)

app.route('/articles', getArticlesRouter)
app.route('/articles/article', getArticleRouter)
app.route('/articles/article', postArticleRouter)
app.route('/articles/article', patchArticleRouter)
app.route('/articles/article', deleteArticleRouter)

app.route('/images', postImageRouter)
app.route('/images', deleteImageRouter)

app.route('/tokens', generateTokensRouter)
app.route('/', swaggerRouter)

// Graceful shutdown для Prisma
process.on('beforeExit', async () => {
  await prisma.$disconnect()
})

export default handle(app)
