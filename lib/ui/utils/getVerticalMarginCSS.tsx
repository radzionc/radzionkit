import { css } from 'styled-components'

import { getCSSUnit } from './getCSSUnit'

export const getVerticalMarginCSS = (value: string | number) => css`
  margin-top: ${getCSSUnit(value)};
  margin-bottom: ${getCSSUnit(value)};
`
