import 'styled-components'
import { Theme } from './Theme'

declare module 'styled-components' {
  export interface DefaultTheme extends Theme {}
}
