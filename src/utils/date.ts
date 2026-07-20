import type { SupportedLocale } from '@/utils/locale'

type DateLength = 'short' | 'long'

const localeMap: Record<SupportedLocale, string> = {
  es: 'es-CL',
  en: 'en-US',
}

export function formatProjectDate(
  isoDate: string,
  locale: SupportedLocale,
  length: DateLength = 'short',
) {
  const [year, month, day] = isoDate.split('-').map(Number)

  if (!year || !month || !day) {
    return isoDate
  }

  const date = new Date(Date.UTC(year, month - 1, day))

  return new Intl.DateTimeFormat(localeMap[locale], {
    day: 'numeric',
    month: length === 'long' ? 'long' : 'short',
    year: 'numeric',
    timeZone: 'UTC',
  }).format(date)
}
