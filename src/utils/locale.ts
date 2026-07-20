export type SupportedLocale = 'es' | 'en'

export const isSupportedLocale = (locale: string): locale is SupportedLocale =>
  locale === 'es' || locale === 'en'

export const normalizeLocale = (locale: string): SupportedLocale =>
  isSupportedLocale(locale) ? locale : 'es'

export const getInitialLocale = (): SupportedLocale => {
  const storedLocale = localStorage.getItem('locale')

  if (storedLocale && isSupportedLocale(storedLocale)) {
    return storedLocale
  }

  const browserLanguages = navigator.languages ?? [navigator.language]

  const prefersSpanish = browserLanguages.some((language) =>
    language.toLowerCase().startsWith('es')
  )

  return prefersSpanish ? 'es' : 'en'
}
