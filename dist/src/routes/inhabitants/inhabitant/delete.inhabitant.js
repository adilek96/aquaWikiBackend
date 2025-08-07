// удаление обитателя
import { Hono } from 'hono';
import { adminAuth } from '../../../middleware/auth.js';
const router = new Hono();
router.delete('/inhabitants/inhabitant/:id', adminAuth, async (c) => {
    const prisma = c.get('prisma');
    const id = c.req.param('id');
    try {
        // Проверяем, существует ли обитатель
        const existingInhabitant = await prisma.inhabitant.findUnique({
            where: { id }
        });
        if (!existingInhabitant) {
            return c.json({ statusCode: 404, statusMessage: "Inhabitant not found" }, 404);
        }
        // Удаляем обитателя (каскадное удаление переводов настроено в схеме)
        await prisma.inhabitant.delete({
            where: {
                id: id
            }
        });
        return c.json({ statusCode: 200, statusMessage: "Deleted", inhabitantId: id });
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
