import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import type { SupportedLocale } from '@/utils/locale'

export function useLanguage() {
  const { locale } = useI18n({ useScope: 'global' })

  const languageLabel = computed(() => locale.value.toUpperCase())

  function setLanguage(language: SupportedLocale) {
    locale.value = language
    localStorage.setItem('locale', language)
    document.documentElement.lang = language
  }

  function toggleLanguage() {
    setLanguage(locale.value === 'es' ? 'en' : 'es')
  }

  document.documentElement.lang = locale.value

  return {
    locale,
    languageLabel,
    setLanguage,
    toggleLanguage,
  }
}
