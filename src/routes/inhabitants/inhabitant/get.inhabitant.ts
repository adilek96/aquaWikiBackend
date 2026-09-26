// получение обитателя по ID
import { Hono } from 'hono'
import type { HonoEnv } from "../../../../lib/honoEnv.js";
import { formatInhabitant, relativesInclude } from '../../../lib/inhabitantFormat.js'
import { refreshImageField } from '../../../lib/minio.js'

const router = new Hono<HonoEnv>()

type Relative = { id: string; title: string; imageUrl: string | null }

/** Картинки вида и подвидов переподписываются так же, как у самого обитателя. */
async function withRelatives<T extends { imageUrl: string; parent?: Relative | null; varieties?: Relative[] }>(item: T) {
  const [self] = await refreshImageField([item])
  const parent = item.parent ? (await refreshImageField([item.parent]))[0] : item.parent
  const varieties = item.varieties ? await refreshImageField(item.varieties) : item.varieties
  return { ...self, parent, varieties }
}

router.get('/inhabitants/inhabitant/:id', async (c) => {
  const prisma = c.get('prisma');
  const id = c.req.param('id');
  const locale = c.req.query('locale') || 'ru'; // по умолчанию русский
  // all=1 — все переводы с разделами (для формы редактирования в дашборде)
  const all = c.req.query('all') === '1';

  try {
    const inhabitant = await prisma.inhabitant.findUnique({
      where: { id },
      include: {
        translations: all ? true : { where: { locale } },
        ...relativesInclude(locale)
      }
    });

    if (!inhabitant) {
      return c.json({ statusCode: 404, statusMessage: "Inhabitant not found" }, 404);
    }

    return c.json({
      statusCode: 200,
      statusMessage: "Success",
      // Ссылка переподписывается: в базе лежит подпись семидневной давности
      // и со старым хостом по http, который браузер блокирует на https
      inhabitant: await withRelatives(
        formatInhabitant(inhabitant as any, locale, { sections: true, all })
      )
    });

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
