import { StyleSheetManager } from 'styled-components'
import isPropValid from '@emotion/is-prop-valid'
import { useEffect, useState } from 'react'
import {
  DefaultTheme,
  ThemeProvider as StyledComponentsThemeProvider,
} from 'styled-components'

import { ThemePreference } from './ThemePreference'
import { darkTheme } from './darkTheme'
import { ComponentWithChildrenProps } from '../props'
import { lightTheme } from './lightTheme'
import { getValueProviderSetup } from '../state/getValueProviderSetup'
import { useMedia } from '../hooks/useMedia'

const shouldForwardProp = (propName: string, target: any) => {
  if (typeof target === 'string') {
    return isPropValid(propName)
  }
  return true
}

type ThemePreferenceState = {
  value: ThemePreference
  onChange: (value: ThemePreference) => void
}

type DarkLightThemeProviderProps = ComponentWithChildrenProps & {
  value: ThemePreference
  onChange?: (value: ThemePreference) => void
}

const { useValue: useThemePreference, provider: ThemePreferenceProvider } =
  getValueProviderSetup<ThemePreferenceState>('ThemePreference')

export const DarkLightThemeProvider = ({
  children,
  value,
  onChange = () => {},
}: DarkLightThemeProviderProps) => {
  const isSystemThemeDark = useMedia('(prefers-color-scheme: dark)', false)
  const [theme, setTheme] = useState<DefaultTheme>(darkTheme)

  useEffect(() => {
    if (value === 'system') {
      setTheme(isSystemThemeDark ? darkTheme : lightTheme)
    } else {
      setTheme(value === 'dark' ? darkTheme : lightTheme)
    }
  }, [isSystemThemeDark, value])

  return (
    <StyleSheetManager shouldForwardProp={shouldForwardProp}>
      <ThemePreferenceProvider
        value={{
          value,
          onChange,
        }}
      >
        <StyledComponentsThemeProvider theme={theme}>
          {children}
        </StyledComponentsThemeProvider>
      </ThemePreferenceProvider>
    </StyleSheetManager>
  )
}

export { useThemePreference }
