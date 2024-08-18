import { StyleSheetManager } from 'styled-components'
import isPropValid from '@emotion/is-prop-valid'
import { ThemeProvider as StyledComponentsThemeProvider } from 'styled-components'
import { DefaultTheme } from 'styled-components'

import { ComponentWithChildrenProps } from '../props'

const shouldForwardProp = (propName: string, target: any) => {
  if (typeof target === 'string') {
    return isPropValid(propName)
  }
  return true
}

type ThemeProviderProps = ComponentWithChildrenProps & {
  theme: DefaultTheme
}

export const ThemeProvider = ({ children, theme }: ThemeProviderProps) => {
  return (
    <StyleSheetManager shouldForwardProp={shouldForwardProp}>
      <StyledComponentsThemeProvider theme={theme}>
        {children}
      </StyledComponentsThemeProvider>
    </StyleSheetManager>
  )
}
