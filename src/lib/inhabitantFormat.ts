import { SECTION_KEYS, type SectionKey } from './inhabitantProfile.js'

type TranslationRow = { locale: string; title: string } & Partial<
  Record<SectionKey, string | null>
>

type RelativeRow = {
  id: string
  imageUrl: string
  translations: { locale: string; title: string }[]
}

type InhabitantRow = {
  id: string
  type: string[]
  subtype: string
  imageUrl: string
  articleUrl: string
  profile: unknown
  gallery?: unknown
  parentId?: string | null
  parent?: RelativeRow | null
  varieties?: RelativeRow[]
  _count?: { varieties: number }
  translations: TranslationRow[]
}

function sectionsOf(translation: TranslationRow | undefined) {
  return Object.fromEntries(
    SECTION_KEYS.map((key) => [key, translation?.[key] ?? null])
  ) as Record<SectionKey, string | null>
}

/** Вид или подвид в кратком виде: для ссылок между ними. */
function relative(row: RelativeRow, locale: string) {
  return {
    id: row.id,
    title: row.translations.find((t) => t.locale === locale)?.title || '',
    imageUrl: row.imageUrl,
  }
}

/** Что догрузить к обитателю, чтобы отдать вид и подвиды. */
export function relativesInclude(locale: string) {
  const translations = { where: { locale }, select: { locale: true, title: true } }
  return {
    parent: { select: { id: true, imageUrl: true, translations } },
    varieties: {
      select: { id: true, imageUrl: true, translations },
      orderBy: { id: 'asc' as const },
    },
  }
}

/**
 * Ответ для сайта: название и разделы на одном языке.
 * С all=true — дополнительно все переводы целиком: дашборду они нужны для
 * формы редактирования, иначе сохранение затирало бы остальные языки.
 */
export function formatInhabitant(
  inhabitant: InhabitantRow,
  locale: string,
  options: { sections: boolean; all: boolean }
) {
  const translation = inhabitant.translations.find((t) => t.locale === locale)

  return {
    id: inhabitant.id,
    type: inhabitant.type,
    subtype: inhabitant.subtype,
    title: translation?.title || '',
    imageUrl: inhabitant.imageUrl,
    articleUrl: inhabitant.articleUrl,
    profile: inhabitant.profile ?? null,
    gallery: inhabitant.gallery ?? [],
    parentId: inhabitant.parentId ?? null,
    ...(inhabitant._count ? { varietyCount: inhabitant._count.varieties } : {}),
    ...(inhabitant.parent !== undefined
      ? { parent: inhabitant.parent ? relative(inhabitant.parent, locale) : null }
      : {}),
    ...(inhabitant.varieties
      ? { varieties: inhabitant.varieties.map((v) => relative(v, locale)) }
      : {}),
    ...(options.sections ? { sections: sectionsOf(translation) } : {}),
    ...(options.all
      ? {
          translations: inhabitant.translations.map((t) => ({
            locale: t.locale,
            title: t.title,
            ...sectionsOf(t),
          })),
        }
      : {}),
  }
}
