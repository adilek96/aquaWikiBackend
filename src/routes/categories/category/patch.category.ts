// обновление категории
import * as z from "zod";
import { Hono } from 'hono'
import type { HonoEnv } from "../../../../lib/honoEnv.js";
import { zValidator } from '@hono/zod-validator';
import { adminAuth } from '../../../middleware/auth.js';

// валидируем данные через зод 
const translationSchema = z.object({
  title: z.string(),
  description: z.string()
})

const postValidation = z.object({
  id: z.string(),
  translations: z.object({
    az: translationSchema,
    ru: translationSchema,
    en: translationSchema
  })
})


const router = new Hono<HonoEnv>()


router.patch('/categories/category', adminAuth, zValidator('json', postValidation), async (c) => {
  const prisma = c.get('prisma'); 

  try {
    const body = await c.req.json();
    const { id, translations } = body;

    // Проверка, существует ли категория
    const existingCategory = await prisma.categories.findUnique({
      where: { id }
    });

    if (!existingCategory) {
      return c.json({ statusCode: 404, statusMessage: "Category not found" }, 404);
    }

    // Обновляем переводы (или создаём если не существует)
    for (const [locale, value] of Object.entries(translations)) {
        const v = value as { title: string; description: string };
      const existingTranslation = await prisma.translationCategory.findFirst({
        where: { categoryId: id, locale }
      });

      if (existingTranslation) {
        // обновляем
        await prisma.translationCategory.update({
          where: { id: existingTranslation.id },
          data: {
            title: v.title,
            description: v.description
          }
        });
      } else {
        // создаём новый
        await prisma.translationCategory.create({
          data: {
            categoryId: id,
            locale,
            title: v.title,
            description: v.description
          }
        });
      }
    }

    return c.json({ statusCode: 200, statusMessage: "Updated", categoryId: id });



} catch (error) {
  
  console.error('Route Error:', error)
    return c.json({
      statusCode: 500,
      statusMessage: 'Server Error',
      error: error instanceof Error ? error.message : String(error)
    }, 500)
}

})

export default router



