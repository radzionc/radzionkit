import styled from 'styled-components'
import { UnstyledButton } from './UnstyledButton'
import { getColor } from '../theme/getters'
import { transition } from '../css/transition'
import { getHoverVariant } from '../theme/getHoverVariant'

export const TextButton = styled(UnstyledButton)`
  color: ${getColor('primary')};
  font-weight: 500;

  ${transition};

  &:hover {
    color: ${getHoverVariant('primary')};
  }
`
