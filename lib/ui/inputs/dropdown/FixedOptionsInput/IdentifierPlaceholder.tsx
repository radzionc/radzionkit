import styled from 'styled-components'

import { centerContent } from '../../../css/centerContent'
import { round } from '../../../css/round'
import { sameDimensions } from '../../../css/sameDimensions'
import { getColor } from '../../../theme/getters'

export const IdentifierPlaceholder = styled.div`
  ${round};
  ${sameDimensions('1em')};
  background: ${getColor('mist')};
  ${centerContent};
`
