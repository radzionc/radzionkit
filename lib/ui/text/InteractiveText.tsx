import styled from 'styled-components'

import { interactive } from '../css/interactive'
import { transition } from '../css/transition'
import { getColor } from '../theme/getters'

import { Text } from '.'

export const InteractiveText = styled(Text)`
  ${interactive};
  ${transition};
  &:hover {
    color: ${getColor('contrast')};
  }
`
