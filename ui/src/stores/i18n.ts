import { defineStore } from 'pinia'
import { computed } from 'vue'

import { resolveLanguagePreference } from '../lib/locale/language'
import { DEFAULT_UI_LOCALE, messages, type UiLocale } from '../lib/i18n/messages'
import { useIpcStore } from './ipc'

function getByPath(source: Record<string, any>, path: string): unknown {
  return path.split('.').reduce<unknown>((current, part) => {
    if (!current || typeof current !== 'object') {
      return undefined
    }

    return (current as Record<string, unknown>)[part]
  }, source)
}

function interpolate(template: string, params?: Record<string, string | number>) {
  if (!params) {
    return template
  }

  return template.replace(/\{(\w+)\}/g, (_, key) => String(params[key] ?? `{${key}}`))
}

export const useI18nStore = defineStore('i18n', () => {
  const ipcStore = useIpcStore()

  const locale = computed<UiLocale>(() => {
    const resolved = resolveLanguagePreference(ipcStore.params.userConfig?.appLanguage)
    return (resolved in messages ? resolved : DEFAULT_UI_LOCALE) as UiLocale
  })

  const t = (key: string, params?: Record<string, string | number>) => {
    const localized = getByPath(messages[locale.value] as Record<string, any>, key)
    const fallback = getByPath(messages[DEFAULT_UI_LOCALE] as Record<string, any>, key)
    const template = typeof localized === 'string'
      ? localized
      : typeof fallback === 'string'
        ? fallback
        : key

    return interpolate(template, params)
  }

  return {
    locale,
    t,
  }
})
