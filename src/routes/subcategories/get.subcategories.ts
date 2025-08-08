// получение всех категорий

import { Hono } from 'hono'
import type { HonoEnv } from "../../../lib/honoEnv.js";



const router = new Hono<HonoEnv>()


router.get('/subcategories', async (c) => {
  const prisma = c.get('prisma');
  const lang = c.req.query('lang');
  

  try {
    // получаем категории
    let subcategories;

    // если язык не передан
    if(lang === undefined || lang === null){
        subcategories = await prisma.subCategories.findMany({
            where: {
                translations: {
                  some: {
                    locale: lang
                  }
                }
              },
            include: {
                translations: true
            }
        })
    }
    // если язык передан
    if(lang){
       subcategories = await prisma.subCategories.findMany({
        where: {
            translations: {
              some: {
                locale: lang
              }
            }
          },
            select: {
              id: true,
              translations: {
                where: { locale: lang },
                select: {
                  title: true,
                  description: true
                }
              }
            }
          })
    }
    


     // возращаем ответ
     return c.json({ statusCode: 200, subcategories});

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