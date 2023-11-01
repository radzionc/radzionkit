import { ComponentWithChildrenProps } from '@reactkit/ui/props'
import { PrefferedThemeProvider } from '@reactkit/ui/theme/PrefferedThemeProvider'
import { ThemePreference } from '@reactkit/ui/theme/ThemePreference'
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
