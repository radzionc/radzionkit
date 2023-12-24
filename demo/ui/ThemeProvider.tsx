import { ComponentWithChildrenProps } from '@radzionkit/ui/props'
import { PrefferedThemeProvider } from '@radzionkit/ui/theme/PrefferedThemeProvider'
import { ThemePreference } from '@radzionkit/ui/theme/ThemePreference'
import { PersistentStateKey, usePersistentState } from 'state/persistentState'
import { StyleSheetManager } from 'styled-components'
import isPropValid from '@emotion/is-prop-valid'

const shouldForwardProp = (propName: string, target: any) => {
  if (typeof target === 'string') {
    return isPropValid(propName)
  }
  return true
}

export const ThemeProvider = ({ children }: ComponentWithChildrenProps) => {
  const [prefferedTheme, setPrefferedTheme] =
    usePersistentState<ThemePreference>(
      PersistentStateKey.ThemePreference,
      'system',
    )

  return (
    <StyleSheetManager shouldForwardProp={shouldForwardProp}>
      <PrefferedThemeProvider
        prefferedTheme={prefferedTheme}
        setPrefferedTheme={setPrefferedTheme}
      >
        {children}
      </PrefferedThemeProvider>
    </StyleSheetManager>
  )
}
