import { css } from 'styled-components'

import { toSizeUnit } from './toSizeUnit'

export const horizontalPadding = (value: string | number) => css`
  padding-left: ${toSizeUnit(value)};
  padding-right: ${toSizeUnit(value)};
`
