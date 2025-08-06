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
  translations: z.object({
    az: translationSchema,
    ru: translationSchema,
    en: translationSchema
  }),
  categoryId: z.array(z.string())
})


const router = new Hono<HonoEnv>()


router.patch('/subcategories/subcategory', adminAuth, zValidator('json', postValidation), async (c) => {
  const prisma = c.get('prisma'); 

  try {
    const body = await c.req.json();
    const { id, translations, categoryId } = body;

    // Проверка, существует ли категория
    const existingSubCategory = await prisma.subCategories.findUnique({
      where: { id }
    });

    if (!existingSubCategory) {
      return c.json({ statusCode: 404, statusMessage: "Category not found" }, 404);
    }

    // Обновляем переводы (или создаём если не существует)
    for (const [locale, value] of Object.entries(translations)) {
        const v = value as { title: string; description: string };
      const existingSubTranslation = await prisma.translationSubCategory.findFirst({
        where: { subCategoryId: id, locale }
      });

      if (existingSubTranslation) {
        // обновляем
        await prisma.translationSubCategory.update({
          where: { id: existingSubTranslation.id },
          data: {
            title: v.title,
            description: v.description
          }
        });
      } else {
        // создаём новый
        await prisma.translationSubCategory.create({
          data: {
            subCategoryId: id,
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



