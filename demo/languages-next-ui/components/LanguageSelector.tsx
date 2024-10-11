import { Menu } from '@lib/ui/Menu'
import { useLanguage } from './LanguageProvider'
import styled from 'styled-components'
import { IconWrapper } from '@lib/ui/icons/IconWrapper'
import { HStack } from '@lib/ui/css/stack'
import { MenuOptionProps, MenuOption } from '@lib/ui/menu/MenuOption'
import {
  languageNativeName,
  languagePrimaryCountry,
  languages,
} from '@demo/languages/Language'
import CountryFlag from '@lib/ui/countries/flags/CountryFlag'
import { Text } from '@lib/ui/text'
import { Button } from '@lib/ui/buttons/Button'

const FlagWrapper = styled(IconWrapper)`
  border-radius: 2px;
  font-size: 18px;
`

export const LanguageSelector = () => {
  const [language, setLanguage] = useLanguage()

  return (
    <Menu
      title="Select language"
      renderOpener={({ props: { ref, ...props } }) => (
        <div ref={ref} {...props}>
          <Button size="s" kind="ghost">
            <HStack alignItems="center" gap={8}>
              <FlagWrapper>
                <CountryFlag code={languagePrimaryCountry[language]} />
              </FlagWrapper>
              <Text size={12} weight="500" height="s">
                {language.toUpperCase()}
              </Text>
            </HStack>
          </Button>
        </div>
      )}
      renderContent={({ view, onClose }) => {
        const options: MenuOptionProps[] = languages.map((option) => ({
          icon: (
            <FlagWrapper>
              <CountryFlag code={languagePrimaryCountry[option]} />
            </FlagWrapper>
          ),
          text: languageNativeName[option],
          onSelect: () => {
            if (language !== option) {
              setLanguage(option)
            }
            onClose()
          },
        }))

        return options.map((props, index) => (
          <MenuOption view={view} key={index} {...props} />
        ))
      }}
    />
  )
}
