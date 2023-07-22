import { ThemeColors } from './ThemeColors'
import { ThemeName } from './ThemeName'
import { ThemeShadows } from './ThemeShadows'

export interface Theme {
  name: ThemeName
  colors: ThemeColors
  shadows: ThemeShadows
}
