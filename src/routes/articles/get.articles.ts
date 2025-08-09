import { Hono } from 'hono'
import type { HonoEnv } from '../../../lib/honoEnv.js'

const router = new Hono<HonoEnv>()

router.get('/articles', async (c) => {
  const prisma = c.get('prisma')
  const locale = c.req.query('locale') || 'ru' // язык по умолчанию
  const subCategoryId = c.req.query('subCategoryId') // опциональная фильтрация по подкатегории

  try {
    const whereClause = subCategoryId
      ? { subCategories: { some: { id: subCategoryId } } }
      : {}

    const articles = await prisma.article.findMany({
      where: whereClause,
      include: {
        translations: { where: { locale } },
        articleImages: true,
        subCategories: {
          include: {
            translations: { where: { locale } }
          }
        }
      }
    })

    const formattedArticles = articles.map(article => {
      const translation = article.translations[0] || {}
      return {
        id: article.id,
        title: translation.title || '',
        description: translation.description || '',
        subCategories: article.subCategories.map((subCat: any) => {
          const subTranslation = subCat.translations[0] || {}
          return {
            id: subCat.id,
            title: subTranslation.title || '',
            description: subTranslation.description || ''
          }
        }),
        images: article.articleImages.map((img: any) => ({
          id: img.id,
          url: img.url,
          uploadedAt: img.uploadedAt
        }))
      }
    })

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
