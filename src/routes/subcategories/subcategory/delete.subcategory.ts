// удаление категории
import { Hono } from 'hono'
import type { HonoEnv } from "../../../../lib/honoEnv.js";
import { adminAuth } from '../../../middleware/auth.js';

const router = new Hono<HonoEnv>()

router.delete('/subcategories/subcategory/:id', adminAuth, async (c) => {
    const prisma = c.get('prisma'); 
    const id = c.req.param('id');

    try {
        // удаляем категорию
        await prisma.subCategories.delete({
            where: {
                id: id
            }
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