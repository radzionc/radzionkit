import styled from 'styled-components'
import { HSLA } from '../colors/HSLA'
import { centerContent } from '../css/centerContent'
import { sameDimensions } from '../css/sameDimensions'
import { round } from '../css/round'

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
