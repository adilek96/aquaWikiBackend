import { Hono } from "hono";
import type { HonoEnv } from "../../../lib/honoEnv.js";

const router = new Hono<HonoEnv>();

router.get("/subcategories", async (c) => {
  const prisma = c.get("prisma");
  const lang = c.req.query("lang") || null;

  try {
    let subcategories;

    if (!lang) {
      // Если язык не передан — возвращаем всё
      subcategories = await prisma.subCategories.findMany({
        include: {
          translations: true,
          categories: {
            include: {
              translations: true,
            },
          },
        },
      });
    } else {
      // Если язык передан — фильтруем переводы
      subcategories = await prisma.subCategories.findMany({
        where: {
          translations: {
            some: {
              locale: lang,
            },
          },
        },
        select: {
          id: true,
          translations: {
            where: { locale: lang },
            select: {
              title: true,
              description: true,
            },
          },
          categories: {
            select: {
              id: true,
              translations: {
                where: { locale: lang },
                select: {
                  title: true,
                  description: true,
                },
              },
            },
          },
        },
      });
    }

    return c.json({ statusCode: 200, subcategories });
  } catch (error) {
    console.error("Route Error:", error);
    return c.json(
      {
        statusCode: 500,
        statusMessage: "Server Error",
        error: error instanceof Error ? error.message : String(error),
      },
      500
    );
  }
});

export default router;
