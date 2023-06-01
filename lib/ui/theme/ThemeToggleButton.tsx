import styled, { useTheme } from 'styled-components'
import { defaultTransitionCSS } from '../animations/transitions'
import { UnstyledButton } from '../buttons/UnstyledButton'
import { MoonIcon } from '../icons/MoonIcon'
import { SunIcon } from '../icons/SunIcon'
import { usePrefferedTheme } from './PrefferedThemeProvider'

const Button = styled(UnstyledButton)`
  color: ${({ theme }) => theme.colors.textSupporting.toCssValue()};
  font-size: 18px;
  ${defaultTransitionCSS};
  padding: 12px 6px;

  :hover {
    color: ${({ theme }) => theme.colors.text.toCssValue()};
  }
`

export const ThemeToggleButton = () => {
  const { name } = useTheme()
  const { setPrefferedTheme } = usePrefferedTheme()

  return (
    <Button
      onClick={() => setPrefferedTheme(name === 'dark' ? 'light' : 'dark')}
    >
      {name === 'light' ? <SunIcon /> : <MoonIcon />}
    </Button>
  )
}
