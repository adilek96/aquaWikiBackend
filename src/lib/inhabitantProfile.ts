import * as z from 'zod'

/**
 * Шаблон статьи об обитателе.
 *
 * Паспорт — короткие поля с числами и выбором из списка, общие для всех
 * языков. Хранится в Inhabitant.profile (JSON). Какие поля показывать для
 * какого подтипа, решают дашборд и сайт; здесь только допустимые ключи и типы.
 *
 * Те же ключи продублированы в aquaDashboard (lib/inhabitant-template.ts)
 * и aquaDaddy (lib/wiki.ts) — при добавлении поля править все три места.
 */

const range = z
  .object({
    min: z.number().finite().optional(),
    max: z.number().finite().optional(),
  })
  .strict()

const positive = z.number().finite().nonnegative()

const oneOf = <T extends readonly [string, ...string[]]>(values: T) => z.enum(values)

export const LEVELS = ['LOW', 'MEDIUM', 'HIGH'] as const

export const profileSchema = z
  .object({
    // Общие
    scientificName: z.string().trim().max(200),
    difficulty: oneOf(['EASY', 'MEDIUM', 'HARD'] as const),
    temperature: range,
    ph: range,
    gh: range,
    kh: range,
    size: positive,
    lifespan: positive,
    minVolume: positive,

    // Рыбы и беспозвоночные
    temperament: oneOf(['PEACEFUL', 'SEMI_AGGRESSIVE', 'AGGRESSIVE', 'PREDATOR'] as const),
    social: oneOf(['SOLITARY', 'PAIR', 'HAREM', 'SCHOOL'] as const),
    groupSize: positive,
    swimZone: z.array(oneOf(['BOTTOM', 'MIDDLE', 'TOP'] as const)),
    diet: oneOf(['OMNIVORE', 'CARNIVORE', 'HERBIVORE'] as const),
    jumps: z.boolean(),
    eatsPlants: z.boolean(),
    copperSensitive: z.boolean(),

    // Растения и кораллы
    light: oneOf(LEVELS),
    co2: oneOf(['NONE', 'RECOMMENDED', 'REQUIRED'] as const),
    growth: oneOf(['SLOW', 'MEDIUM', 'FAST'] as const),
    placement: z.array(
      oneOf(['FOREGROUND', 'MIDGROUND', 'BACKGROUND', 'FLOATING', 'EPIPHYTE'] as const)
    ),
    flow: oneOf(LEVELS),
    stinging: z.boolean(),
    coralFeeding: oneOf(['PHOTOSYNTHETIC', 'SUPPLEMENTAL', 'REQUIRED'] as const),

    // Морская вода
    salinity: range,
    calcium: range,
    magnesium: range,

    // Палюдариум
    airTemperature: range,
    humidity: range,
    needsLand: z.boolean(),
    uvb: z.boolean(),
  })
  .partial()
  .strict()

export type InhabitantProfile = z.infer<typeof profileSchema>

/** Текстовые разделы — колонки TranslationInhabitant. */
export const SECTION_KEYS = [
  'otherNames',
  'origin',
  'overview',
  'appearance',
  'care',
  'feeding',
  'compatibility',
  'breeding',
  'facts',
] as const

export type SectionKey = (typeof SECTION_KEYS)[number]

export const translationSchema = z.object({
  title: z.string(),
  ...Object.fromEntries(
    SECTION_KEYS.map((key) => [key, z.string().max(20000).nullish()])
  ),
}) as z.ZodType<{ title: string } & Partial<Record<SectionKey, string | null>>>

export const AQUARIUM_TYPES = ['FRESHWATER', 'SALTWATER', 'PALUDARIUM'] as const

/** Пустые строки и пустые диапазоны не храним: иначе «заполнено» нельзя отличить от «пусто». */
export function cleanProfile(profile: InhabitantProfile): InhabitantProfile | null {
  const out: Record<string, unknown> = {}
  for (const [key, value] of Object.entries(profile)) {
    if (value === undefined || value === null || value === '') continue
    if (Array.isArray(value) && value.length === 0) continue
    if (typeof value === 'object' && !Array.isArray(value)) {
      const r = value as { min?: number; max?: number }
      if (r.min === undefined && r.max === undefined) continue
    }
    out[key] = value
  }
  return Object.keys(out).length > 0 ? (out as InhabitantProfile) : null
}

export function cleanSections(
  value: Partial<Record<SectionKey, string | null>>
): Record<SectionKey, string | null> {
  return Object.fromEntries(
    SECTION_KEYS.map((key) => {
      const text = value[key]?.trim()
      return [key, text ? text : null]
    })
  ) as Record<SectionKey, string | null>
}
