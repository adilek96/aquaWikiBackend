// добавление обитателя
import * as z from "zod";
import { Hono } from 'hono'
import type { HonoEnv } from "../../../../lib/honoEnv.js";
import { zValidator } from '@hono/zod-validator';
import { adminAuth } from '../../../middleware/auth.js';

// валидируем данные через зод 
const translationSchema = z.object({
  title: z.string()
})

const postValidation = z.object({
  type: z.array(z.string()),
  subtype: z.string(),
  translations: z.object({
    az: translationSchema,
    ru: translationSchema,
    en: translationSchema
  }),
  imageUrl: z.string().url(),
  articleUrl: z.string().url()
})

const router = new Hono<HonoEnv>()

router.post('/inhabitants/inhabitant', adminAuth, zValidator('json', postValidation), async (c) => {
  const prisma = c.get('prisma'); 

  try {
    const body = await c.req.json()

    // Создаём обитателя
    const inhabitant = await prisma.inhabitant.create({
      data: {
        type: body.type,
        subtype: body.subtype,
        imageUrl: body.imageUrl,
        articleUrl: body.articleUrl
      }
    })

    // Добавляем переводы
    const translationsData = Object.entries(body.translations).map(
      ([locale, value]) => {
        const v = value as { title: string };
        return {
          locale,
          title: v.title,
          inhabitantId: inhabitant.id
        }
      }
    )

    await prisma.translationInhabitant.createMany({
      data: translationsData
    })
    
    // Возвращаем ответ
    return c.json({ statusCode: 200, statusMessage: "Created", inhabitantId: inhabitant.id })

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
