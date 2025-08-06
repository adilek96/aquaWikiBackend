// получение всех категорий
import { Hono } from 'hono';
const router = new Hono();
router.get('/categories', async (c) => {
    const prisma = c.get('prisma');
    const lang = c.req.query('lang');
    try {
        // получаем категории
        let categories;
        // если язык не передан
        if (lang === undefined || lang === null) {
            categories = await prisma.categories.findMany({
                where: {
                    translations: {
                        some: {
                            locale: lang
                        }
                    }
                },
                include: {
                    translations: true
                }
            });
        }
        // если язык передан
        if (lang) {
            categories = await prisma.categories.findMany({
                where: {
                    translations: {
                        some: {
                            locale: lang
                        }
                    }
                },
                select: {
                    id: true,
                    translations: {
                        where: { locale: lang },
                        select: {
                            title: true,
                            description: true
                        }
                    }
                }
            });
        }
        // возращаем ответ
        return c.json({ statusCode: 200, categories });
    }
    catch (error) {
        console.error('Route Error:', error);
        return c.json({
            statusCode: 500,
            statusMessage: 'Server Error',
            error: error instanceof Error ? error.message : String(error)
        }, 500);
    }
});
export default router;
