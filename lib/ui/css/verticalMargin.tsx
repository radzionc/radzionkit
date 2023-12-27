import { css } from 'styled-components'

import { toSizeUnit } from './toSizeUnit'

export const verticalMargin = (value: string | number) => css`
  margin-top: ${toSizeUnit(value)};
  margin-bottom: ${toSizeUnit(value)};
`
