import 'styled-components'

import { Theme } from '@radzionkit/ui/theme/Theme'

declare module 'styled-components' {
  export interface DefaultTheme extends Theme {}
}
