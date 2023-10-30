import { useTheme } from 'styled-components'
import { MoonIcon } from '../icons/MoonIcon'
import { SunIcon } from '../icons/SunIcon'
import { usePrefferedTheme } from './PrefferedThemeProvider'
import { IconButton } from '../../buttons/IconButton'

export const ThemeToggleButton = () => {
  const { name } = useTheme()
  const { setPrefferedTheme } = usePrefferedTheme()

  return (
    <IconButton
      kind="secondary"
      title="Toggle theme"
      onClick={() => setPrefferedTheme(name === 'dark' ? 'light' : 'dark')}
      icon={name === 'light' ? <SunIcon /> : <MoonIcon />}
    />
  )
}
