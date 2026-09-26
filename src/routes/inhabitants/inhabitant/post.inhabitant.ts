// добавление обитателя
import * as z from "zod";
import { Hono } from 'hono'
import type { HonoEnv } from "../../../../lib/honoEnv.js";
import { zValidator } from '@hono/zod-validator';
import { adminAuth } from '../../../middleware/auth.js';
import {
  AQUARIUM_TYPES,
  cleanProfile,
  cleanSections,
  gallerySchema,
  profileSchema,
  translationSchema,
} from '../../../lib/inhabitantProfile.js'
import { checkParent } from '../../../lib/inhabitantParent.js'

// Картинка и ссылка на статью необязательны: раньше без них обитателя
// нельзя было создать вовсе, а дашборд подставлял localhost
const optionalUrl = z.string().url().or(z.literal('')).optional()

const postValidation = z.object({
  type: z.array(z.enum(AQUARIUM_TYPES)).min(1),
  subtype: z.string(),
  translations: z.object({
    az: translationSchema,
    ru: translationSchema,
    en: translationSchema
  }),
  imageUrl: optionalUrl,
  articleUrl: optionalUrl,
  profile: profileSchema.nullable().optional(),
  gallery: gallerySchema.nullable().optional(),
  // Подвид: id вида. null — сделать самостоятельным видом
  parentId: z.string().min(1).nullable().optional()
})

const router = new Hono<HonoEnv>()

router.post('/inhabitants/inhabitant', adminAuth, zValidator('json', postValidation), async (c) => {
  const prisma = c.get('prisma');

  try {
    const body = c.req.valid('json')
    const profile = body.profile ? cleanProfile(body.profile) : null

    if (body.parentId) {
      const problem = await checkParent(prisma, body.parentId)
      if (problem) return c.json({ statusCode: 400, statusMessage: 'Bad Request', error: problem }, 400)
    }

    const inhabitant = await prisma.inhabitant.create({
      data: {
        type: body.type,
        subtype: body.subtype,
        imageUrl: body.imageUrl ?? '',
        articleUrl: body.articleUrl ?? '',
        ...(profile ? { profile } : {}),
        ...(body.gallery?.length ? { gallery: body.gallery } : {}),
        ...(body.parentId ? { parent: { connect: { id: body.parentId } } } : {}),
        translations: {
          create: Object.entries(body.translations).map(([locale, value]) => ({
            locale,
            title: value.title,
            ...cleanSections(value)
          }))
        }
      }
    })

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
