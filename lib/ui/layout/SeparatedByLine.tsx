import styled from 'styled-components'

import { VStack } from '@lib/ui/css/stack'
import { toSizeUnit } from '../css/toSizeUnit'
import { getColor } from '../theme/getters'

export const SeparatedByLine = styled(VStack)`
  > *:not(:last-child) {
    border-bottom: 1px solid ${getColor('mistExtra')};
    padding-bottom: ${({ gap = 0 }) => toSizeUnit(gap)};
  }
`
