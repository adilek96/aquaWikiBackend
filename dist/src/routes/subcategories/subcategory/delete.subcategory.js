// удаление категории
import { Hono } from 'hono';
import { adminAuth } from '../../../middleware/auth.js';
const router = new Hono();
router.delete('/subcategories/subcategory/:id', adminAuth, async (c) => {
    const prisma = c.get('prisma');
    const id = c.req.param('id');
    try {
        // удаляем категорию
        await prisma.subCategories.delete({
            where: {
                id: id
            }
        });
        return c.json({ statusCode: 200, statusMessage: "Deleted", subcategoryId: id });
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
