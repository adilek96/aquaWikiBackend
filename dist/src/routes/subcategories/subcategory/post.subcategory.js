// добавление подкатегории
import * as z from "zod";
import { Hono } from "hono";
import { zValidator } from "@hono/zod-validator";
import { adminAuth } from "../../../middleware/auth.js";
// Валидация перевода
const translationSchema = z.object({
    title: z.string(),
    description: z.string(),
});
// Основная валидация тела запроса
const postValidation = z.object({
    translations: z.object({
        az: translationSchema,
        ru: translationSchema,
        en: translationSchema,
    }),
    categoryIds: z.array(z.string().min(1, "Category ID is required")),
});
const router = new Hono();
router.post("/subcategories/subcategory", adminAuth, zValidator("json", postValidation), async (c) => {
    const prisma = c.get("prisma");
    try {
        const body = await c.req.json();
        // Транзакция: создаём подкатегорию и переводы вместе
        const { subcategory } = await prisma.$transaction(async (tx) => {
            const subcategory = await tx.subCategories.create({
                data: {
                    categories: {
                        connect: body.categoryIds.map((id) => ({ id })),
                    },
                },
            });
            const translationsData = Object.entries(body.translations).map(([locale, value]) => ({
                locale,
                title: value.title,
                description: value.description,
                subCategoryId: subcategory.id,
            }));
            await tx.translationSubCategory.createMany({
                data: translationsData,
            });
            return { subcategory };
        });
        // Возвращаем ответ
        return c.json({
            statusCode: 200,
            statusMessage: "Created",
            subcategory,
        });
    }
    catch (error) {
        console.error("Route Error:", error);
        return c.json({
            statusCode: 500,
            statusMessage: "Server Error",
            error: error instanceof Error ? error.message : String(error),
        }, 500);
    }
});
export default router;
