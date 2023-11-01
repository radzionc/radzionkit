import styled from 'styled-components'

import { VStack } from './Stack'
import { toSizeUnit } from '../css/toSizeUnit'
import { getColor } from '../ui/theme/getters'

export const SeparatedByLine = styled(VStack)`
  > *:not(:last-child) {
    border-bottom: 1px solid ${getColor('mistExtra')};
    padding-bottom: ${({ gap = 0 }) => toSizeUnit(gap)};
  }
`
