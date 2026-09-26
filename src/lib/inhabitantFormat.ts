import { SECTION_KEYS, type SectionKey } from './inhabitantProfile.js'

type TranslationRow = { locale: string; title: string } & Partial<
  Record<SectionKey, string | null>
>

type InhabitantRow = {
  id: string
  type: string[]
  subtype: string
  imageUrl: string
  articleUrl: string
  profile: unknown
  translations: TranslationRow[]
}

function sectionsOf(translation: TranslationRow | undefined) {
  return Object.fromEntries(
    SECTION_KEYS.map((key) => [key, translation?.[key] ?? null])
  ) as Record<SectionKey, string | null>
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
