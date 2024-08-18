import { IconButton } from '../buttons/IconButton'
import { MoonIcon } from '../icons/MoonIcon'
import { SunIcon } from '../icons/SunIcon'
import { useThemePreference } from './DarkLightThemeProvider'

export const ThemeToggleButton = () => {
  const { value, onChange } = useThemePreference()

  return (
    <IconButton
      kind="secondary"
      title="Toggle theme"
      onClick={() => onChange(value === 'dark' ? 'light' : 'dark')}
      icon={value === 'light' ? <SunIcon /> : <MoonIcon />}
    />
  )
}
