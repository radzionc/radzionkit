import 'styled-components'

import { ThemeColors } from '@reactkit/ui/ui/theme/ThemeColors'

import { ThemeName } from '@reactkit/ui/ui/theme/ThemeName'
import { ThemeShadows } from '@reactkit/ui/ui/theme/ThemeShadows'

declare module 'styled-components' {
  export interface DefaultTheme {
    name: ThemeName
    colors: ThemeColors
    shadows: ThemeShadows
  }
}
