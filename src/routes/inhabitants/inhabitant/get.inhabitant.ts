// получение обитателя по ID
import { Hono } from 'hono'
import type { HonoEnv } from "../../../../lib/honoEnv.js";

const router = new Hono<HonoEnv>()

router.get('/inhabitants/inhabitant/:id', async (c) => {
  const prisma = c.get('prisma'); 
  const id = c.req.param('id');
  const locale = c.req.query('locale') || 'ru'; // по умолчанию русский

  try {
    const inhabitant = await prisma.inhabitant.findUnique({
      where: { id },
      include: {
        translations: {
          where: { locale }
        }
      }
    });

    if (!inhabitant) {
      return c.json({ statusCode: 404, statusMessage: "Inhabitant not found" }, 404);
    }

    // Форматируем ответ
    const translation = inhabitant.translations[0] || {};
    
    const formattedInhabitant = {
      id: inhabitant.id,
      type: inhabitant.type,
      subtype: inhabitant.subtype,
      title: translation.title || '',
      imageUrl: inhabitant.imageUrl,
      articleUrl: inhabitant.articleUrl
    };

    return c.json({ 
      statusCode: 200, 
      statusMessage: "Success", 
      inhabitant: formattedInhabitant 
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
