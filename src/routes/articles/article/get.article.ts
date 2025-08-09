// получение статьи по ID
import { Hono } from 'hono'
import type { HonoEnv } from "../../../../lib/honoEnv.js";

const router = new Hono<HonoEnv>()

router.get('/articles/article/:id', async (c) => {
  const prisma = c.get('prisma'); 
  const id = c.req.param('id');
  const locale = c.req.query('locale') || 'ru'; // по умолчанию русский

  try {
    const article = await prisma.article.findUnique({
      where: { id },
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
    });

    if (!article) {
      return c.json({ statusCode: 404, statusMessage: "Article not found" }, 404);
    }

    // Форматируем ответ
    const translation = article.translations[0] || {};
    
    const formattedArticle = {
      id: article.id,
      title: translation.title || '',
      description: translation.description || '',
      subCategories: article.subCategories.map((subCat: any) => ({
        id: subCat.id,
        title: subCat.translations[0]?.title || '',
        description: subCat.translations[0]?.description || ''
      })),
      images: article.articleImages.map((img: any) => ({
        id: img.id,
        url: img.url,
        uploadedAt: img.uploadedAt
      }))
    };

    return c.json({ 
      statusCode: 200, 
      statusMessage: "Success", 
      article: formattedArticle 
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
