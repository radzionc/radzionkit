import { ThemeProvider, useTheme } from 'styled-components'

import { ChildrenProp } from '../props'

import { darkTheme } from './darkTheme'
import { lightTheme } from './lightTheme'

export const ReversedTheme = ({ children }: ChildrenProp) => {
  const theme = useTheme()

  return (
    <ThemeProvider theme={theme.name === 'dark' ? lightTheme : darkTheme}>
      {children}
    </ThemeProvider>
  )
}
