import { Language } from '@product/languages/Language'

interface UpdateLanguageInPathnameParams {
  pathname: string
  oldLanguage: Language
  newLanguage: Language
}

export const updateLanguageInPathname = ({
  pathname,
  oldLanguage,
  newLanguage,
}: UpdateLanguageInPathnameParams) => {
  const parths = pathname.split('/')

  if (parths[1] === oldLanguage) {
    parths[1] = newLanguage
  } else {
    parths.splice(1, 0, newLanguage)
  }

  return parths.join('/')
}
