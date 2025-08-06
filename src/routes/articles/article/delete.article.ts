// удаление статьи
import { Hono } from 'hono'
import type { HonoEnv } from "../../../../lib/honoEnv.js";
import { adminAuth } from '../../../middleware/auth.js';

const router = new Hono<HonoEnv>()

router.delete('/articles/article/:id', adminAuth, async (c) => {
    const prisma = c.get('prisma'); 
    const id = c.req.param('id');

    try {
        // Проверяем, существует ли статья
        const existingArticle = await prisma.article.findUnique({
            where: { id }
        });

        if (!existingArticle) {
            return c.json({ statusCode: 404, statusMessage: "Article not found" }, 404);
        }

        // Удаляем статью (каскадное удаление переводов и изображений настроено в схеме)
        await prisma.article.delete({
            where: {
                id: id
            }
        })
        
        return c.json({ statusCode: 200, statusMessage: "Deleted", articleId: id });
        
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
