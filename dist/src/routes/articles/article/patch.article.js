// обновление статьи
import * as z from "zod";
import { Hono } from 'hono';
import { zValidator } from '@hono/zod-validator';
import { adminAuth } from '../../../middleware/auth.js';
// валидируем данные через зод 
const translationSchema = z.object({
    title: z.string(),
    description: z.string()
});
const patchValidation = z.object({
    id: z.string(),
    subCategoryId: z.string().optional(),
    translations: z.object({
        az: translationSchema,
        ru: translationSchema,
        en: translationSchema
    }).optional(),
    images: z.array(z.string()).optional()
});
const router = new Hono();
router.patch('/articles/article', adminAuth, zValidator('json', patchValidation), async (c) => {
    const prisma = c.get('prisma');
    try {
        const body = await c.req.json();
        const { id, subCategoryId, translations, images } = body;
        // Проверка, существует ли статья
        const existingArticle = await prisma.article.findUnique({
            where: { id }
        });
        if (!existingArticle) {
            return c.json({ statusCode: 404, statusMessage: "Article not found" }, 404);
        }
        // Обновляем подкатегорию, если указана
        if (subCategoryId) {
            const subCategory = await prisma.subCategories.findUnique({
                where: { id: subCategoryId }
            });
            if (!subCategory) {
                return c.json({ statusCode: 404, statusMessage: "SubCategory not found" }, 404);
            }
            await prisma.article.update({
                where: { id },
                data: { subCategoryId }
            });
        }
        // Обновляем переводы, если указаны
        if (translations) {
            for (const [locale, value] of Object.entries(translations)) {
                const v = value;
                const existingTranslation = await prisma.translationArticle.findFirst({
                    where: { articleId: id, locale }
                });
                if (existingTranslation) {
                    // обновляем
                    await prisma.translationArticle.update({
                        where: { id: existingTranslation.id },
                        data: {
                            title: v.title,
                            description: v.description
                        }
                    });
                }
                else {
                    // создаём новый
                    await prisma.translationArticle.create({
                        data: {
                            articleId: id,
                            locale,
                            title: v.title,
                            description: v.description
                        }
                    });
                }
            }
        }
        // Обновляем изображения, если указаны
        if (images) {
            // Удаляем старые изображения
            await prisma.articleImages.deleteMany({
                where: { articleId: id }
            });
            // Добавляем новые изображения
            if (images.length > 0) {
                const imagesData = images.map((url) => ({
                    articleId: id,
                    url
                }));
                await prisma.articleImages.createMany({
                    data: imagesData
                });
            }
        }
        return c.json({ statusCode: 200, statusMessage: "Updated", articleId: id });
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
