// получение списка статей
import { Hono } from 'hono'
import type { HonoEnv } from "../../../lib/honoEnv.js";

const router = new Hono<HonoEnv>()

router.get('/articles', async (c) => {
  const prisma = c.get('prisma'); 
  const locale = c.req.query('locale') || 'ru'; // по умолчанию русский
  const subCategoryId = c.req.query('subCategoryId'); // опциональная фильтрация по подкатегории

  try {
    const whereClause: any = {};
    if (subCategoryId) {
      whereClause.subCategoryId = subCategoryId;
    }

    const articles = await prisma.article.findMany({
      where: whereClause,
      include: {
        translations: {
          where: { locale }
        },
        articleImages: true,
        category: {
          include: {
            translations: {
              where: { locale }
            }
          }
        }
      }
    });

    // Форматируем ответ
    const formattedArticles = articles.map(article => {
      const translation = article.translations[0] || {};
      const subCategoryTranslation = article.category.translations[0] || {};
      
      return {
        id: article.id,
        subCategoryId: article.subCategoryId,
        title: translation.title || '',
        description: translation.description || '',
        subCategory: {
          id: article.category.id,
          title: subCategoryTranslation.title || '',
          description: subCategoryTranslation.description || ''
        },
        images: article.articleImages.map(img => ({
          id: img.id,
          url: img.url,
          uploadedAt: img.uploadedAt
        }))
      };
    });

    return c.json({ 
      statusCode: 200, 
      statusMessage: "Success", 
      articles: formattedArticles 
    });

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