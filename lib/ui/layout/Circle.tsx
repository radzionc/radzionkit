import styled from 'styled-components'

import { HSLA } from '../colors/HSLA'
import { centerContent } from '../css/centerContent'
import { round } from '../css/round'
import { sameDimensions } from '../css/sameDimensions'

interface Props {
  size: number
  background?: HSLA
}

export const Circle = styled.div<Props>`
  ${centerContent}
  background: ${({ background }) => background?.toCssValue()};
  ${round}
  ${({ size }) => sameDimensions(size)}
`
