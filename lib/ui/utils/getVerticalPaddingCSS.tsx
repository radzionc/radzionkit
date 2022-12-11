import { css } from 'styled-components'

import { getCSSUnit } from './getCSSUnit'

export const getVerticalPaddingCSS = (value: string | number) => css`
  padding-top: ${getCSSUnit(value)};
  padding-bottom: ${getCSSUnit(value)};
`
