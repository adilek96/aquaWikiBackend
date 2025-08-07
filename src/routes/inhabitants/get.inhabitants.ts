// получение списка обитателей
import { Hono } from 'hono'
import type { HonoEnv } from "../../../lib/honoEnv.js";

const router = new Hono<HonoEnv>()

router.get('/inhabitants', async (c) => {
  const prisma = c.get('prisma'); 
  const locale = c.req.query('locale') || 'ru'; // по умолчанию русский
  const type = c.req.query('type'); // опциональная фильтрация по типу

  try {
    const whereClause: any = {};
    if (type) {
      whereClause.type = {
        has: type
      };
    }

    const inhabitants = await prisma.inhabitant.findMany({
      where: whereClause,
      include: {
        translations: {
          where: { locale }
        }
      }
    });

    // Форматируем ответ
    const formattedInhabitants = inhabitants.map((inhabitant: any) => {
      const translation = inhabitant.translations[0] || {};
      
      return {
        id: inhabitant.id,
        type: inhabitant.type,
        subtype: inhabitant.subtype,
        title: translation.title || '',
        imageUrl: inhabitant.imageUrl,
        articleUrl: inhabitant.articleUrl
      };
    });

    return c.json({ 
      statusCode: 200, 
      statusMessage: "Success", 
      inhabitants: formattedInhabitants 
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
