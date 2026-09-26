// получение списка обитателей
import { Hono } from 'hono'
import type { HonoEnv } from "../../../lib/honoEnv.js";
import { formatInhabitant } from '../../lib/inhabitantFormat.js'
import { refreshImageField } from '../../lib/minio.js'

const router = new Hono<HonoEnv>()

router.get('/inhabitants', async (c) => {
  const prisma = c.get('prisma');
  const locale = c.req.query('locale') || 'ru'; // по умолчанию русский
  const type = c.req.query('type'); // опциональная фильтрация по типу
  const subtype = c.req.query('subtype');
  // all=1 — все переводы (для дашборда)
  const all = c.req.query('all') === '1';

  try {
    const whereClause: any = {};
    if (type) {
      whereClause.type = {
        has: type
      };
    }
    if (subtype) {
      whereClause.subtype = subtype;
    }

    const inhabitants = await prisma.inhabitant.findMany({
      where: whereClause,
      include: {
        translations: all ? true : { where: { locale } }
      }
    });

    // Разделы в списке не нужны — они большие, а карточке хватает паспорта
    const formattedInhabitants = inhabitants.map((inhabitant: any) =>
      formatInhabitant(inhabitant, locale, { sections: false, all })
    );

    return c.json({
      statusCode: 200,
      statusMessage: "Success",
      // Ссылки переподписываем: в базе лежат подписи семидневной давности
      // и со старым хостом по http, который браузер блокирует на https
      inhabitants: await refreshImageField(formattedInhabitants)
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
