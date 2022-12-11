import { css } from 'styled-components'

import { getCSSUnit } from './getCSSUnit'

export const getHorizontalMarginCSS = (value: string | number) => css`
  margin-left: ${getCSSUnit(value)};
  margin-right: ${getCSSUnit(value)};
`
