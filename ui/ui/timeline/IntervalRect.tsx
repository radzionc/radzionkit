import styled from 'styled-components'
import { HSLA } from '../../colors/HSLA'

export const IntervalRect = styled.div<{ $color: HSLA }>`
  position: absolute;
  width: 100%;
  border-radius: 4px;
  background-color: ${({ $color }) => $color.toCssValue()};
`
