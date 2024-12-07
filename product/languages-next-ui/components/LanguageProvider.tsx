import { Language } from '@product/languages/Language'
import { getValueProviderSetup } from '@lib/ui/state/getValueProviderSetup'
import { useRouter } from 'next/router'
import { updateLanguageInPathname } from '../utils/updateLanguageInPathname'

const { useValue: useLanguageValue, provider: LanguageProvider } =
  getValueProviderSetup<Language>('Copy')

export { LanguageProvider }

export const useLanguage = () => {
  const language = useLanguageValue()

  const { asPath, push } = useRouter()

  const setLanguage = (newLanguage: Language) => {
    const newPathname = updateLanguageInPathname({
      pathname: asPath,
      newLanguage,
      oldLanguage: language,
    })

    push(newPathname)
  }

  return [language, setLanguage] as const
}
