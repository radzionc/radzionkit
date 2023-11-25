import { CountryCode } from '@reactkit/utils/countries'

export const languages = ['en', 'ru', 'ka'] as const
export type Language = (typeof languages)[number]

export const primaryLanguage: Language = 'en' as const

export const languagePrimaryCountry: Record<Language, CountryCode> = {
  en: 'GB',
  ru: 'RU',
  ka: 'GE',
}

export const languageNativeName: Record<Language, string> = {
  en: 'English',
  ru: 'Русский',
  ka: 'ქართული',
}
