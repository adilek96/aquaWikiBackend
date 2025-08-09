import * as z from "zod";
import { Hono } from "hono";
import type { HonoEnv } from "../../../../lib/honoEnv.js";
import { zValidator } from "@hono/zod-validator";
import { adminAuth } from "../../../middleware/auth.js";

// Валидация перевода
const translationSchema = z.object({
  title: z.string(),
  description: z.string(),
});

// Основная валидация тела запроса
const patchValidation = z.object({
  id: z.string().min(1, "ID is required"),
  translations: z.object({
    az: translationSchema,
    ru: translationSchema,
    en: translationSchema,
  }),
  categoryIds: z.array(z.string().min(1, "Category ID is required")),
});

const router = new Hono<HonoEnv>();

router.patch(
  "/subcategories/subcategory",
  adminAuth,
  zValidator("json", patchValidation),
  async (c) => {
    const prisma = c.get("prisma");

    try {
      const body = await c.req.json<z.infer<typeof patchValidation>>();
      const { id, translations, categoryIds } = body;

      // Проверка существования подкатегории
      const existingSubCategory = await prisma.subCategories.findUnique({
        where: { id },
      });

      if (!existingSubCategory) {
        return c.json(
          { statusCode: 404, statusMessage: "Subcategory not found" },
          404
        );
      }

      // Транзакция: обновление связей и переводов
      await prisma.$transaction(async (tx) => {
        // Обновляем связь с категориями
        await tx.subCategories.update({
          where: { id },
          data: {
            categories: {
              set: [], // убираем старые связи
              connect: categoryIds.map((cid) => ({ id: cid })),
            },
          },
        });

        // Обновляем или создаём переводы
        for (const [locale, value] of Object.entries(translations)) {
          const existingTranslation =
            await tx.translationSubCategory.findFirst({
              where: { subCategoryId: id, locale },
            });

          if (existingTranslation) {
            await tx.translationSubCategory.update({
              where: { id: existingTranslation.id },
              data: {
                title: value.title,
                description: value.description,
              },
            });
          } else {
            await tx.translationSubCategory.create({
              data: {
                subCategoryId: id,
                locale,
                title: value.title,
                description: value.description,
              },
            });
          }
        }
      });

      return c.json({
        statusCode: 200,
        statusMessage: "Updated",
        subcategoryId: id,
      });
    } catch (error) {
      console.error("Route Error:", error);
      return c.json(
        {
          statusCode: 500,
          statusMessage: "Server Error",
          error: error instanceof Error ? error.message : String(error),
        },
        500
      );
    }
  }
);

export default router;


