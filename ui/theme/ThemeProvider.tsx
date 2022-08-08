import { useMemo } from 'react'
import { useMedia } from 'react-use'
import { ComponentWithChildrenProps } from 'shared/props'
import { ThemeProvider as StyledComponentsThemeProvider } from 'styled-components'
import { darkTheme } from 'ui/theme/darkTheme'

import { lightTheme } from './lightTheme'
import { useThemePreference } from './useThemePreference'

export const ThemeProvider = ({ children }: ComponentWithChildrenProps) => {
  const [themePreference] = useThemePreference()

  const isSystemThemeDark = useMedia('(prefers-color-scheme: dark)')
  console.log(isSystemThemeDark)

  const theme = useMemo(() => {
    if (themePreference === 'system') {
      return isSystemThemeDark ? darkTheme : lightTheme
    }

    return themePreference === 'dark' ? darkTheme : lightTheme
  }, [isSystemThemeDark, themePreference])

  return (
    <StyledComponentsThemeProvider theme={theme}>
      {children}
    </StyledComponentsThemeProvider>
  )
}
