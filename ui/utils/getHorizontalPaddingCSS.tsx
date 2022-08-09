import { css } from 'styled-components'

import { getCSSUnit } from './getCSSUnit'

export const getHorizontalPaddingCSS = (value: string | number) => css`
  padding-left: ${getCSSUnit(value)};
  padding-right: ${getCSSUnit(value)};
`
