import { Menu } from '@radzionkit/ui/Menu'
import { useLanguage } from './LanguageProvider'
import styled from 'styled-components'
import { IconWrapper } from '@radzionkit/ui/icons/IconWrapper'
import { HStack } from '@radzionkit/ui/layout/Stack'
import { MenuOptionProps, MenuOption } from '@radzionkit/ui/menu/MenuOption'
import {
  languageNativeName,
  languagePrimaryCountry,
  languages,
} from '@radzionkit/languages/Language'
import CountryFlag from '@radzionkit/ui/countries/flags/CountryFlag'
import { Text } from '@radzionkit/ui/text'
import { Button } from '@radzionkit/ui/buttons/Button'

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
