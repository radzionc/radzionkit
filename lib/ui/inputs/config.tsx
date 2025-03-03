import { css } from 'styled-components'

import { borderRadius } from '../css/borderRadius'
import { getColor } from '../theme/getters'

export const defaultInputHeight = '52px'

export const defaultInputShapeCSS = css`
  height: ${defaultInputHeight};
  width: 100%;
  padding: 12px;
  ${borderRadius.s}
`

export const inputBackgroundCSS = css`
  background: ${getColor('mist')};
`
