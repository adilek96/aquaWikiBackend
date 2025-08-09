import * as z from "zod";
import { Hono } from "hono";
import type { HonoEnv } from "../../../../lib/honoEnv.js";
import { zValidator } from "@hono/zod-validator";
import { adminAuth } from "../../../middleware/auth.js";

// Валидация перевода (description — JSON от Editor.js)
const translationSchema = z.object({
  title: z.string().min(1, "Title is required"),
  description: z.any() // Editor.js возвращает JSON-объект
});

const postValidation = z.object({
  subCategoryIds: z.array(z.string().min(1, "SubCategory ID is required")),
  translations: z.object({
    az: translationSchema,
    ru: translationSchema,
    en: translationSchema
  }),
  images: z.array(z.string().url("Invalid image URL")).optional()
});

const router = new Hono<HonoEnv>();

router.post(
  "/articles/article",
  adminAuth,
  zValidator("json", postValidation),
  async (c) => {
    const prisma = c.get("prisma");

    try {
      const body = await c.req.json<z.infer<typeof postValidation>>();

      // Проверяем, что все подкатегории существуют
      const subcategories = await prisma.subCategories.findMany({
        where: { id: { in: body.subCategoryIds } },
        select: { id: true }
      });

      if (subcategories.length !== body.subCategoryIds.length) {
        return c.json(
          {
            statusCode: 404,
            statusMessage: "One or more SubCategories not found"
          },
          404
        );
      }

      // Создаём статью и привязываем к подкатегориям
      const article = await prisma.article.create({
        data: {
          subCategories: {
            connect: body.subCategoryIds.map((id) => ({ id }))
          }
        }
      });

      // Добавляем переводы
      const translationsData = Object.entries(body.translations).map(
        ([locale, value]) => ({
          locale,
          title: value.title,
          description: value.description, // JSON от Editor.js
          articleId: article.id
        })
      );

      await prisma.translationArticle.createMany({
        data: translationsData
      });

      // Добавляем изображения
      if (body.images?.length) {
        await prisma.articleImages.createMany({
          data: body.images.map((url) => ({
            articleId: article.id,
            url
          }))
        });
      }

      return c.json({
        statusCode: 200,
        statusMessage: "Created",
        articleId: article.id
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