import { createContext, useEffect, useState } from 'react'
import { useMedia } from 'react-use'
import { DefaultTheme, ThemeProvider } from 'styled-components'

import { lightTheme } from './lightTheme'
import { ThemePreference } from './ThemePreference'
import { ComponentWithChildrenProps } from '../../props'
import { darkTheme } from './darkTheme'
import { createContextHook } from '../../state/createContextHook'

interface PrefferedThemeState {
  prefferedTheme: ThemePreference
  setPrefferedTheme: (theme: ThemePreference) => void
}

const PrefferedThemeContext = createContext<PrefferedThemeState | undefined>(
  undefined,
)

type Props = PrefferedThemeState & ComponentWithChildrenProps

export const PrefferedThemeProvider = ({
  prefferedTheme,
  setPrefferedTheme,
  children,
}: Props) => {
  const isSystemThemeDark = useMedia('(prefers-color-scheme: dark)', false)

  const [theme, setTheme] = useState<DefaultTheme>(darkTheme)
  useEffect(() => {
    if (prefferedTheme === 'system') {
      setTheme(isSystemThemeDark ? darkTheme : lightTheme)
    } else {
      setTheme(prefferedTheme === 'dark' ? darkTheme : lightTheme)
    }
  }, [isSystemThemeDark, prefferedTheme])

  return (
    <PrefferedThemeContext.Provider
      value={{ prefferedTheme, setPrefferedTheme }}
    >
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </PrefferedThemeContext.Provider>
  )
}

export const usePrefferedTheme = createContextHook(
  PrefferedThemeContext,
  'PrefferedThemeContext',
)
