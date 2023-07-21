import { ComponentWithChildrenProps } from '@reactkit/ui/shared/props'
import { PrefferedThemeProvider } from '@reactkit/ui/ui/theme/PrefferedThemeProvider'
import { ThemePreference } from '@reactkit/ui/ui/theme/ThemePreference'
import {
  PersistentStorageKey,
  usePersistentStorageValue,
} from 'state/persistentStorage'

export const ThemeProvider = ({ children }: ComponentWithChildrenProps) => {
  const [prefferedTheme, setPrefferedTheme] =
    usePersistentStorageValue<ThemePreference>(
      PersistentStorageKey.ThemePreference,
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
