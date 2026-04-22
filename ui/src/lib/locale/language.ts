export const AUTO_LANGUAGE_VALUE = 'auto'
export const DEFAULT_LANGUAGE = 'ru_RU'

export const SUPPORTED_LANGUAGE_OPTIONS = [
  { id: 'ru_RU', name: 'Русский' },
  { id: 'en_US', name: 'English (US)' },
  { id: 'es_AR', name: 'Español (Argentina)' },
  { id: 'tr_TR', name: 'Türkçe (Türkiye)' },
] as const

export const LANGUAGE_OPTIONS = [
  { id: AUTO_LANGUAGE_VALUE, name: 'Авто' },
  ...SUPPORTED_LANGUAGE_OPTIONS,
] as const

const SUPPORTED_LANGUAGE_CODES = SUPPORTED_LANGUAGE_OPTIONS.map(
  (option) => option.id
)

function splitLocale(locale: string) {
  return locale
    .trim()
    .replace(/-/g, '_')
    .split('_')
    .filter(Boolean)
}

export function normalizeLocale(locale?: string | null): string {
  if (!locale) {
    return DEFAULT_LANGUAGE
  }

  const [language = '', region = ''] = splitLocale(locale)

  if (!language) {
    return DEFAULT_LANGUAGE
  }

  if (!region) {
    return language.toLowerCase()
  }

  return `${language.toLowerCase()}_${region.toUpperCase()}`
}

function findSupportedLocale(locale: string): string | null {
  const normalized = normalizeLocale(locale)

  if (SUPPORTED_LANGUAGE_CODES.includes(normalized as never)) {
    return normalized
  }

  const [language] = normalized.split('_')

  return (
    SUPPORTED_LANGUAGE_CODES.find((supportedLocale) =>
      supportedLocale.startsWith(`${language}_`)
    ) || null
  )
}

export function getNavigatorLanguages(): string[] {
  if (typeof navigator === 'undefined') {
    return []
  }

  if (Array.isArray(navigator.languages) && navigator.languages.length > 0) {
    return navigator.languages
  }

  return navigator.language ? [navigator.language] : []
}

export function resolveAutoLanguage(
  navigatorLanguages: readonly string[],
  fallbackLanguage = DEFAULT_LANGUAGE
): string {
  for (const navigatorLanguage of navigatorLanguages) {
    const matchedLanguage = findSupportedLocale(navigatorLanguage)

    if (matchedLanguage) {
      return matchedLanguage
    }
  }

  return fallbackLanguage
}

export function resolveLanguagePreference(
  configuredLanguage?: string | null,
  navigatorLanguages: readonly string[] = getNavigatorLanguages(),
  fallbackLanguage = DEFAULT_LANGUAGE
): string {
  if (!configuredLanguage || configuredLanguage === AUTO_LANGUAGE_VALUE) {
    return resolveAutoLanguage(navigatorLanguages, fallbackLanguage)
  }

  return findSupportedLocale(configuredLanguage) || normalizeLocale(configuredLanguage)
}

export function toHtmlLang(locale: string): string {
  return normalizeLocale(locale).replace(/_/g, '-')
}

export function getLanguageLabel(locale: string): string {
  if (locale === AUTO_LANGUAGE_VALUE) {
    return 'Авто'
  }

  const normalized = normalizeLocale(locale)
  const matchedOption = LANGUAGE_OPTIONS.find((option) => option.id === normalized)

  if (matchedOption) {
    return matchedOption.name
  }

  return toHtmlLang(normalized)
}

export function buildLanguageOptions(
  values: readonly (string | null | undefined)[] = [],
  includeAuto = true
): { id: string; name: string }[] {
  const options: { id: string; name: string }[] = includeAuto
    ? [...LANGUAGE_OPTIONS]
    : [...SUPPORTED_LANGUAGE_OPTIONS]

  for (const value of values) {
    if (!value || value === AUTO_LANGUAGE_VALUE) {
      continue
    }

    const normalizedValue = normalizeLocale(value)

    if (options.some((option) => option.id === normalizedValue)) {
      continue
    }

    options.push({
      id: normalizedValue,
      name: toHtmlLang(normalizedValue),
    })
  }

  return options
}

export function syncDocumentLanguageAttributes(userConfig?: {
  appLanguage?: string | null
  userLanguage?: string | null
}) {
  const navigatorLanguages = getNavigatorLanguages()
  const appLanguage = resolveLanguagePreference(
    userConfig?.appLanguage,
    navigatorLanguages
  )
  const userLanguage = resolveLanguagePreference(
    userConfig?.userLanguage,
    navigatorLanguages
  )

  document.documentElement.setAttribute('lang', toHtmlLang(appLanguage))
  document.documentElement.setAttribute('data-app-language', appLanguage)
  document.documentElement.setAttribute('data-user-language', userLanguage)
}
