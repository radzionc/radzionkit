import { ComponentWithChildrenProps } from '@radzionkit/ui/props'
import { PrefferedThemeProvider } from '@radzionkit/ui/theme/PrefferedThemeProvider'
import { ThemePreference } from '@radzionkit/ui/theme/ThemePreference'
import { PersistentStateKey, usePersistentState } from 'state/persistentState'

export const ThemeProvider = ({ children }: ComponentWithChildrenProps) => {
  const [prefferedTheme, setPrefferedTheme] =
    usePersistentState<ThemePreference>(
      PersistentStateKey.ThemePreference,
      'system',
    )

  return (
    <PrefferedThemeProvider
      prefferedTheme={prefferedTheme}
      setPrefferedTheme={setPrefferedTheme}
    >
      {children}
    </PrefferedThemeProvider>
  )
}
