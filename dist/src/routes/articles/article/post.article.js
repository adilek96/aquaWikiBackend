// добавление статьи
import * as z from "zod";
import { Hono } from 'hono';
import { zValidator } from '@hono/zod-validator';
import { adminAuth } from '../../../middleware/auth.js';
// валидируем данные через зод 
const translationSchema = z.object({
    title: z.string(),
    description: z.string()
});
const postValidation = z.object({
    subCategoryId: z.string(),
    translations: z.object({
        az: translationSchema,
        ru: translationSchema,
        en: translationSchema
    }),
    images: z.array(z.string()).optional()
});
const router = new Hono();
router.post('/articles/article', adminAuth, zValidator('json', postValidation), async (c) => {
    const prisma = c.get('prisma');
    try {
        const body = await c.req.json();
        // Проверяем, существует ли подкатегория
        const subCategory = await prisma.subCategories.findUnique({
            where: { id: body.subCategoryId }
        });
        if (!subCategory) {
            return c.json({ statusCode: 404, statusMessage: "SubCategory not found" }, 404);
        }
        // Создаём статью
        const article = await prisma.article.create({
            data: {
                subCategoryId: body.subCategoryId
            }
        });
        // Добавляем переводы
        const translationsData = Object.entries(body.translations).map(([locale, value]) => {
            const v = value;
            return {
                locale,
                title: v.title,
                description: v.description,
                articleId: article.id
            };
        });
        await prisma.translationArticle.createMany({
            data: translationsData
        });
        // Добавляем изображения, если они есть
        if (body.images && body.images.length > 0) {
            const imagesData = body.images.map((url) => ({
                articleId: article.id,
                url
            }));
            await prisma.articleImages.createMany({
                data: imagesData
            });
        }
        // Возвращаем ответ
        return c.json({ statusCode: 200, statusMessage: "Created", articleId: article.id });
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
