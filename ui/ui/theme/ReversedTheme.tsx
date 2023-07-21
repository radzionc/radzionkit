import { ThemeProvider, useTheme } from 'styled-components'
import { darkTheme } from './darkTheme'
import { lightTheme } from './lightTheme'
import { ComponentWithChildrenProps } from '../../shared/props'

export const ReversedTheme = ({ children }: ComponentWithChildrenProps) => {
  const theme = useTheme()

  return (
    <ThemeProvider theme={theme.name === 'dark' ? lightTheme : darkTheme}>
      {children}
    </ThemeProvider>
  )
}
