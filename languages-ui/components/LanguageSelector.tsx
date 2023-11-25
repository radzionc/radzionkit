import { Menu } from '@reactkit/ui/Menu'
import { useLanguage } from './LanguageProvider'
import styled from 'styled-components'
import { IconWrapper } from '@reactkit/ui/icons/IconWrapper'
import { HStack } from '@reactkit/ui/layout/Stack'
import { MenuOptionProps, MenuOption } from '@reactkit/ui/menu/MenuOption'
import {
  languageNativeName,
  languagePrimaryCountry,
  languages,
} from '@reactkit/languages/Language'
import CountryFlag from '@reactkit/ui/countries/flags/CountryFlag'
import { Text } from '@reactkit/ui/text'
import { Button } from '@reactkit/ui/buttons/Button'

const FlagWrapper = styled(IconWrapper)`
  border-radius: 2px;
  font-size: 18px;
`

export const LanguageSelector = () => {
  const [language, setLanguage] = useLanguage()

  return (
    <Menu
      title="Select language"
      renderOpener={({ ref, ...props }) => (
        <div ref={ref} {...props}>
          <Button size="s" kind="ghost">
            <HStack alignItems="center" gap={8}>
              <FlagWrapper>
                <CountryFlag code={languagePrimaryCountry[language]} />
              </FlagWrapper>
              <Text size={12} weight="semibold" height="small">
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
