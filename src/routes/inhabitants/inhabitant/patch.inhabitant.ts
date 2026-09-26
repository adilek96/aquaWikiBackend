// обновление обитателя
import * as z from "zod";
import { Hono } from 'hono'
import type { HonoEnv } from "../../../../lib/honoEnv.js";
import { zValidator } from '@hono/zod-validator';
import { adminAuth } from '../../../middleware/auth.js';
import { Prisma } from '@prisma/client'
import {
  AQUARIUM_TYPES,
  cleanProfile,
  cleanSections,
  gallerySchema,
  profileSchema,
  translationSchema,
} from '../../../lib/inhabitantProfile.js'

const optionalUrl = z.string().url().or(z.literal('')).optional()

const patchValidation = z.object({
  id: z.string(),
  type: z.array(z.enum(AQUARIUM_TYPES)).min(1).optional(),
  subtype: z.string().optional(),
  translations: z.object({
    az: translationSchema,
    ru: translationSchema,
    en: translationSchema
  }).optional(),
  imageUrl: optionalUrl,
  articleUrl: optionalUrl,
  // null — очистить паспорт целиком
  profile: profileSchema.nullable().optional(),
  gallery: gallerySchema.nullable().optional()
})

const router = new Hono<HonoEnv>()

router.patch('/inhabitants/inhabitant', adminAuth, zValidator('json', patchValidation), async (c) => {
  const prisma = c.get('prisma');

  try {
    const { id, type, subtype, translations, imageUrl, articleUrl, profile, gallery } = c.req.valid('json');

    // Проверка, существует ли обитатель
    const existingInhabitant = await prisma.inhabitant.findUnique({
      where: { id }
    });

    if (!existingInhabitant) {
      return c.json({ statusCode: 404, statusMessage: "Inhabitant not found" }, 404);
    }

    const updateData: Prisma.InhabitantUpdateInput = {};
    if (type !== undefined) updateData.type = type;
    if (subtype !== undefined) updateData.subtype = subtype;
    if (imageUrl !== undefined) updateData.imageUrl = imageUrl;
    if (articleUrl !== undefined) updateData.articleUrl = articleUrl;
    if (profile !== undefined) {
      const cleaned = profile ? cleanProfile(profile) : null;
      updateData.profile = cleaned ?? Prisma.DbNull;
    }
    if (gallery !== undefined) {
      updateData.gallery = gallery?.length ? gallery : Prisma.DbNull;
    }

    await prisma.$transaction(async (tx) => {
      if (Object.keys(updateData).length > 0) {
        await tx.inhabitant.update({ where: { id }, data: updateData });
      }

      if (!translations) return;

      for (const [locale, value] of Object.entries(translations)) {
        const data = { title: value.title, ...cleanSections(value) };
        const existingTranslation = await tx.translationInhabitant.findFirst({
          where: { inhabitantId: id, locale }
        });

        if (existingTranslation) {
          await tx.translationInhabitant.update({
            where: { id: existingTranslation.id },
            data
          });
        } else {
          await tx.translationInhabitant.create({
            data: { inhabitantId: id, locale, ...data }
          });
        }
      }
    });

    return c.json({ statusCode: 200, statusMessage: "Updated", inhabitantId: id });

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
