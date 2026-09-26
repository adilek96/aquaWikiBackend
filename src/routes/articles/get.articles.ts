import { Hono } from 'hono'
import type { HonoEnv } from "../../../lib/honoEnv.js";
import { refreshImageUrls } from '../../lib/minio.js'

const router = new Hono<HonoEnv>()

router.get('/articles', async (c) => {
  const prisma = c.get('prisma'); 
  const locale = c.req.query('locale') || 'ru'; // язык по умолчанию
  const subCategoryId = c.req.query('subCategoryId'); // фильтр по подкатегории (опционально)

  try {
    // Формируем where для фильтрации по подкатегории (если указана)
    const whereClause = subCategoryId
      ? {
          subCategories: {
            some: { id: subCategoryId }
          }
        }
      : {}

    const articles = await prisma.article.findMany({
      where: whereClause,
      include: {
        translations: {
          where: { locale }
        },
        articleImages: true,
        subCategories: {
          include: {
            translations: {
              where: { locale }
            }
          }
        }
      }
    })

    // Форматируем ответ
    const formattedArticles = await Promise.all(articles.map(async (article: any) => {
      const translation = article.translations[0] || {}
      return {
        id: article.id,
        title: translation.title || '',
        description: translation.description || '',
        subCategories: article.subCategories.map((subCat: any) => ({
          id: subCat.id,
          title: subCat.translations[0]?.title || '',
          description: subCat.translations[0]?.description || ''
        })),
        // Подпись ссылки живёт 7 дней, а в базе она хранится постоянно:
        // без переподписи картинки отваливаются через неделю, а старые
        // ссылки ещё и указывают на http, что браузер блокирует на https
        images: await refreshImageUrls(
          article.articleImages.map((img: any) => ({
            id: img.id,
            url: img.url,
            uploadedAt: img.uploadedAt
          }))
        )
      }
    }))

    return c.json({
      statusCode: 200,
      statusMessage: 'Success',
      articles: formattedArticles
    })
  } catch (error) {
    console.error('Route Error:', error)
    return c.json({
      statusCode: 500,
      statusMessage: 'Server Error',
      error: error instanceof Error ? error.message : String(error)
    }, 500)
  }
})

export default router
