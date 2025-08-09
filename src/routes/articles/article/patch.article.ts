import * as z from "zod";
import { Hono } from "hono";
import type { HonoEnv } from "../../../../lib/honoEnv.js";
import { zValidator } from "@hono/zod-validator";
import { adminAuth } from "../../../middleware/auth.js";

// Валидация перевода (description — JSON от Editor.js)
const translationSchema = z.object({
  title: z.string().min(1, "Title is required"),
  description: z.any() // Editor.js JSON
});

const patchValidation = z.object({
  id: z.string().min(1, "Article ID is required"),
  subCategoryIds: z.array(z.string().min(1)).optional(),
  translations: z
    .object({
      az: translationSchema,
      ru: translationSchema,
      en: translationSchema
    })
    .partial()
    .optional(),
  images: z.array(z.string().url("Invalid image URL")).optional()
});

const router = new Hono<HonoEnv>();

router.patch(
  "/articles/article",
  adminAuth,
  zValidator("json", patchValidation),
  async (c) => {
    const prisma = c.get("prisma");

    try {
      const body = await c.req.json<z.infer<typeof patchValidation>>();
      const { id, subCategoryIds, translations, images } = body;

      // Проверка, существует ли статья
      const existingArticle = await prisma.article.findUnique({
        where: { id },
        include: { subCategories: true }
      });

      if (!existingArticle) {
        return c.json(
          { statusCode: 404, statusMessage: "Article not found" },
          404
        );
      }

      // Обновляем подкатегории, если указаны
      if (subCategoryIds) {
        const subcategories = await prisma.subCategories.findMany({
          where: { id: { in: subCategoryIds } },
          select: { id: true }
        });

        if (subcategories.length !== subCategoryIds.length) {
          return c.json(
            {
              statusCode: 404,
              statusMessage: "One or more SubCategories not found"
            },
            404
          );
        }

        await prisma.article.update({
          where: { id },
          data: {
            subCategories: {
              set: [], // очищаем старые
              connect: subCategoryIds.map((sid) => ({ id: sid }))
            }
          }
        });
      }

      // Обновляем переводы
      if (translations) {
        for (const [locale, value] of Object.entries(translations)) {
          if (!value) continue;

          const existingTranslation =
            await prisma.translationArticle.findFirst({
              where: { articleId: id, locale }
            });

          if (existingTranslation) {
            await prisma.translationArticle.update({
              where: { id: existingTranslation.id },
              data: {
                title: value.title,
                description: value.description // JSON от Editor.js
              }
            });
          } else {
            await prisma.translationArticle.create({
              data: {
                articleId: id,
                locale,
                title: value.title,
                description: value.description
              }
            });
          }
        }
      }

      // Обновляем изображения
      if (images) {
        await prisma.articleImages.deleteMany({ where: { articleId: id } });

        if (images.length > 0) {
          await prisma.articleImages.createMany({
            data: images.map((url) => ({
              articleId: id,
              url
            }))
          });
        }
      }

      return c.json({
        statusCode: 200,
        statusMessage: "Updated",
        articleId: id
      });
    } catch (error) {
      console.error("Route Error:", error);
      return c.json(
        {
          statusCode: 500,
          statusMessage: "Server Error",
          error: error instanceof Error ? error.message : String(error)
        },
        500
      );
    }
  }
);

export default router;
