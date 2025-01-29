import { ThemeProvider, useTheme } from 'styled-components'
import { darkTheme } from './darkTheme'
import { lightTheme } from './lightTheme'
import { ChildrenProp } from '../props'

export const ReversedTheme = ({ children }: ChildrenProp) => {
  const theme = useTheme()

  return (
    <ThemeProvider theme={theme.name === 'dark' ? lightTheme : darkTheme}>
      {children}
    </ThemeProvider>
  )
}
