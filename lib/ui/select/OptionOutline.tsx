import styled from 'styled-components'

import { absoluteOutline } from '../css/absoluteOutline'
import { borderRadius } from '../css/borderRadius'
import { getColor } from '../theme/getters'

export const OptionOutline = styled.div`
  ${absoluteOutline(0, 0)};
  background: transparent;
  ${borderRadius.s};
  border: 2px solid ${getColor('primary')};
`
