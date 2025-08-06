// добавление категории
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
  })
})


const router = new Hono<HonoEnv>()


router.post('/categories/category', adminAuth, zValidator('json', postValidation), async (c) => {
  const prisma = c.get('prisma'); 

try {
  
  // {
  //   "translations": {
  //     "az": { "title": "Balıq", "description": "Balıq haqqında" },
  //     "ru": { "title": "Рыба", "description": "О рыбе" },
  //     "en": { "title": "Fish", "description": "About fish" }
  //   }
  // }
const body = await c.req.json()

  // записываем данные в бд создавая категорию 
   // Сначала создаём категорию
  const category = await prisma.categories.create({
    data: {}
  })

  // Добавляем переводы
  const translationsData = Object.entries(body.translations).map(
    ([locale, value]) => {
      const v = value as { title: string; description: string };
      return {
      locale,
      title: v.title,
      description: v.description,
      categoryId: category.id
    }
    }
  )

  await prisma.translationCategory.createMany({
    data: translationsData
  })
  
  
    // возращаем ответ
    return c.json({ statusCode: 200, statusMessage: "Created", categoryId: category.id});


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



