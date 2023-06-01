import { ComponentWithChildrenProps } from 'lib/shared/props'
import { ThemeProvider, useTheme } from 'styled-components'
import { darkTheme } from './darkTheme'
import { lightTheme } from './lightTheme'

export const ReversedTheme = ({ children }: ComponentWithChildrenProps) => {
  const theme = useTheme()

  return (
    <ThemeProvider theme={theme.name === 'dark' ? lightTheme : darkTheme}>
      {children}
    </ThemeProvider>
  )
}
