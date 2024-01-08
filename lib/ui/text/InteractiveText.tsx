import styled from 'styled-components'
import { Text } from '.'
import { interactive } from '../css/interactive'
import { transition } from '../css/transition'
import { getColor } from '../theme/getters'

export const InteractiveText = styled(Text)`
  ${interactive};
  ${transition};
  &:hover {
    color: ${getColor('contrast')};
  }
`
