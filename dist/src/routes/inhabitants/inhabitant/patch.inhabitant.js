// обновление обитателя
import * as z from "zod";
import { Hono } from 'hono';
import { zValidator } from '@hono/zod-validator';
import { adminAuth } from '../../../middleware/auth.js';
// валидируем данные через зод 
const translationSchema = z.object({
    title: z.string()
});
const patchValidation = z.object({
    id: z.string(),
    type: z.array(z.string()).optional(),
    subtype: z.string().optional(),
    translations: z.object({
        az: translationSchema,
        ru: translationSchema,
        en: translationSchema
    }).optional(),
    imageUrl: z.string().url().optional(),
    articleUrl: z.string().url().optional()
});
const router = new Hono();
router.patch('/inhabitants/inhabitant', adminAuth, zValidator('json', patchValidation), async (c) => {
    const prisma = c.get('prisma');
    try {
        const body = await c.req.json();
        const { id, type, subtype, translations, imageUrl, articleUrl } = body;
        // Проверка, существует ли обитатель
        const existingInhabitant = await prisma.inhabitant.findUnique({
            where: { id }
        });
        if (!existingInhabitant) {
            return c.json({ statusCode: 404, statusMessage: "Inhabitant not found" }, 404);
        }
        // Обновляем основные данные обитателя
        const updateData = {};
        if (type !== undefined)
            updateData.type = type;
        if (subtype !== undefined)
            updateData.subtype = subtype;
        if (imageUrl !== undefined)
            updateData.imageUrl = imageUrl;
        if (articleUrl !== undefined)
            updateData.articleUrl = articleUrl;
        if (Object.keys(updateData).length > 0) {
            await prisma.inhabitant.update({
                where: { id },
                data: updateData
            });
        }
        // Обновляем переводы, если указаны
        if (translations) {
            for (const [locale, value] of Object.entries(translations)) {
                const v = value;
                const existingTranslation = await prisma.translationInhabitant.findFirst({
                    where: { inhabitantId: id, locale }
                });
                if (existingTranslation) {
                    // обновляем
                    await prisma.translationInhabitant.update({
                        where: { id: existingTranslation.id },
                        data: {
                            title: v.title
                        }
                    });
                }
                else {
                    // создаём новый
                    await prisma.translationInhabitant.create({
                        data: {
                            inhabitantId: id,
                            locale,
                            title: v.title
                        }
                    });
                }
            }
        }
        return c.json({ statusCode: 200, statusMessage: "Updated", inhabitantId: id });
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
