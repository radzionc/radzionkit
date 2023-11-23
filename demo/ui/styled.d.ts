import 'styled-components'

import { Theme } from '@reactkit/ui/theme/Theme'

declare module 'styled-components' {
  export interface DefaultTheme extends Theme {}
}
