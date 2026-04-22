import { describe, expect, it } from 'vitest'

import {
  buildLanguageOptions,
  DEFAULT_LANGUAGE,
  resolveAutoLanguage,
  resolveLanguagePreference,
  toHtmlLang,
} from './language'

describe('language helpers', () => {
  it('resolves auto language from navigator languages', () => {
    expect(resolveAutoLanguage(['es-MX', 'en-US'])).toBe('es_AR')
  })

  it('falls back to default language when auto detection misses', () => {
    expect(resolveAutoLanguage(['fr-FR'])).toBe(DEFAULT_LANGUAGE)
  })

  it('normalizes configured language values', () => {
    expect(resolveLanguagePreference('en-us')).toBe('en_US')
  })

  it('maps auto language to the closest supported locale', () => {
    expect(resolveLanguagePreference('auto', ['tr'])).toBe('tr_TR')
  })

  it('converts locale format for html lang', () => {
    expect(toHtmlLang('es_AR')).toBe('es-AR')
  })

  it('adds custom current values to select options', () => {
    expect(buildLanguageOptions(['de_DE']).map((option) => option.id)).toContain(
      'de_DE'
    )
  })
})
