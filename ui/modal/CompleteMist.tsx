import styled from 'styled-components'
import { takeWholeSpace } from '../css/takeWholeSpace'
import { centerContent } from '../css/centerContent'
import { getColor } from '../ui/theme/getters'

export const CompleteMist = styled.div`
  z-index: 1;

  position: fixed;
  left: 0;
  top: 0;

  ${takeWholeSpace};

  ${centerContent};

  background: ${getColor('overlay')};

  backdrop-filter: blur(4px);
`
