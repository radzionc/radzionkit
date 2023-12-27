import { css } from 'styled-components'

import { toSizeUnit } from './toSizeUnit'

export const horizontalMargin = (value: string | number) => css`
  margin-left: ${toSizeUnit(value)};
  margin-right: ${toSizeUnit(value)};
`
