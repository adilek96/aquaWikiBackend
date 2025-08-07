// добавление подкатегории
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
    translations: z.object({
        az: translationSchema,
        ru: translationSchema,
        en: translationSchema
    }),
    categoryId: z.array(z.string())
});
const router = new Hono();
router.post('/subcategories/subcategory', adminAuth, zValidator('json', postValidation), async (c) => {
    const prisma = c.get('prisma');
    try {
        // {
        //   "translations": {
        //     "az": { "title": "Balıq", "description": "Balıq haqqında" },
        //     "ru": { "title": "Рыба", "description": "О рыбе" },
        //     "en": { "title": "Fish", "description": "About fish" }
        //   }
        // }
        const body = await c.req.json();
        // записываем данные в бд создавая подкатегорию 
        // Сначала создаём подкатегорию
        const subcategory = await prisma.subCategories.create({
            data: {
                categories: {
                    connect: body.categoryIds.map((id) => ({ id }))
                }
            }
        });
        // Добавляем переводы
        const translationsData = Object.entries(body.translations).map(([locale, value]) => {
            const v = value;
            return {
                locale,
                title: v.title,
                description: v.description,
            };
        });
        await prisma.translationSubCategory.createMany({
            data: translationsData.map((item) => ({
                ...item,
                subCategoryId: subcategory.id
            }))
        });
        // возращаем ответ
        return c.json({ statusCode: 200, statusMessage: "Created", subcategoryId: subcategory.id });
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
