import type { PrismaClient } from '@prisma/client'

/**
 * Проверка ссылки подвида на вид. Иерархия одноуровневая: вид → подвиды.
 * Возвращает текст ошибки или null, если всё в порядке.
 */
export async function checkParent(
  prisma: PrismaClient,
  parentId: string,
  selfId?: string
): Promise<string | null> {
  if (parentId === selfId) return 'Обитатель не может быть подвидом самого себя'

  const parent = await prisma.inhabitant.findUnique({
    where: { id: parentId },
    select: { parentId: true },
  })
  if (!parent) return 'Родительский вид не найден'
  if (parent.parentId) return 'Подвид не может быть родителем: выберите сам вид'

  if (selfId) {
    const varieties = await prisma.inhabitant.count({ where: { parentId: selfId } })
    if (varieties > 0) return 'У этого вида есть подвиды — его нельзя сделать подвидом'
  }
  return null
}
