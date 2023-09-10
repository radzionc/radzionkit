import styled from 'styled-components'
import { HSLA } from './colors/HSLA'
import { getSameDimensionsCSS } from './utils/getSameDimensionsCSS'
import { roundedCSS } from './utils/roundedCSS'
import { centerContent } from '../css/centerContent'

interface Props {
  size: number
  background?: HSLA
}

export const Circle = styled.div<Props>`
  ${centerContent}
  background: ${({ background }) => background?.toCssValue()};
  ${roundedCSS}
  ${({ size }) => getSameDimensionsCSS(size)}
`
