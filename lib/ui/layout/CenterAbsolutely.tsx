import styled from 'styled-components'
import { centerContent } from '../css/centerContent'
import { takeWholeSpace } from '../css/takeWholeSpace'

export const CenterAbsolutely = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  ${takeWholeSpace};
  ${centerContent};
`
