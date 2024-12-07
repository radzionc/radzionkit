import 'styled-components'

import { Theme } from '@lib/ui/theme/Theme'

declare module 'styled-components' {
  export interface DefaultTheme extends Theme {}
}
