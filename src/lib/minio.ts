import * as Minio from 'minio'

/**
 * Переподпись ссылок на изображения.
 *
 * В базе лежит полный подписанный URL, а подпись S3 живёт максимум 7 дней.
 * Через неделю после загрузки ссылка перестаёт открываться, и до переезда
 * этого никто не чинил. Вдобавок старые ссылки указывают на прежний сервер
 * по http — страница админки работает по https, и браузер блокирует такие
 * картинки как mixed content.
 *
 * Здесь из сохранённой ссылки достаётся только ключ объекта, а подпись
 * выписывается заново на текущее хранилище.
 */

const PRESIGNED_TTL_SECONDS = 7 * 24 * 60 * 60

let client: Minio.Client | null = null

function getClient(): Minio.Client | null {
  if (client) return client

  const endPoint = process.env.MINIO_ENDPOINT
  const accessKey = process.env.MINIO_ACCESS_KEY
  const secretKey = process.env.MINIO_SECRET_KEY
  if (!endPoint || !accessKey || !secretKey) return null

  client = new Minio.Client({
    endPoint,
    port: parseInt(process.env.MINIO_PORT || '9000', 10),
    useSSL: process.env.MINIO_USE_SSL === 'true',
    accessKey,
    secretKey,
    // Без явного региона клиент перед каждой подписью ходит в хранилище
    // за локацией бакета — лишний запрос на каждую картинку
    region: process.env.MINIO_REGION || 'us-east-1',
  })
  return client
}

function bucket(): string {
  return process.env.MINIO_BUCKET_NAME || 'article-images'
}

/**
 * Достаёт ключ объекта из сохранённой ссылки.
 * Путь имеет вид /<бакет>/<ключ>, поэтому первый сегмент отбрасываем.
 */
export function objectKeyFromUrl(storedUrl: string): string | null {
  try {
    const { pathname } = new URL(storedUrl)
    const parts = pathname.split('/').filter(Boolean)
    return parts.length >= 2 ? parts.slice(1).map(decodeURIComponent).join('/') : null
  } catch {
    return null
  }
}

/** Свежая подпись на тот же объект. При любой заминке возвращает исходную ссылку. */
export async function refreshImageUrl(storedUrl: string | null): Promise<string | null> {
  if (!storedUrl) return storedUrl
  const minio = getClient()
  if (!minio) return storedUrl

  const key = objectKeyFromUrl(storedUrl)
  if (!key) return storedUrl

  try {
    return await minio.presignedGetObject(bucket(), key, PRESIGNED_TTL_SECONDS)
  } catch {
    // Не роняем выдачу из-за одной картинки
    return storedUrl
  }
}

/** То же для списка. */
export async function refreshImageUrls<T extends { url: string }>(
  images: T[]
): Promise<T[]> {
  return Promise.all(
    images.map(async (img) => ({ ...img, url: (await refreshImageUrl(img.url)) ?? img.url }))
  )
}

/**
 * Переподписывает картинки обитателя: главное фото и галерею.
 *
 * Галерею тоже нужно подписывать: в базе у неё лежат такие же временные
 * ссылки, и без обновления снимки отдаются с 403 — хранилище не пускает
 * запрос без подписи.
 */
export async function refreshImageField<
  T extends { imageUrl?: string | null; gallery?: unknown }
>(items: T[]): Promise<T[]> {
  return Promise.all(
    items.map(async (item) => {
      const gallery = Array.isArray(item.gallery)
        ? await Promise.all(
            (item.gallery as Array<{ url?: string }>).map(async (g) => ({
              ...g,
              url: g?.url ? ((await refreshImageUrl(g.url)) ?? g.url) : g?.url,
            }))
          )
        : item.gallery

      return {
        ...item,
        imageUrl: (await refreshImageUrl(item.imageUrl ?? null)) ?? item.imageUrl,
        ...(item.gallery !== undefined ? { gallery } : {}),
      }
    })
  )
}
