import { css } from 'styled-components'

import { toSizeUnit } from './toSizeUnit'

export const verticalPadding = (value: string | number) => css`
  padding-top: ${toSizeUnit(value)};
  padding-bottom: ${toSizeUnit(value)};
`
