import styled from 'styled-components'

import { transition } from '../css/transition'
import { getHoverVariant } from '../theme/getHoverVariant'
import { getColor } from '../theme/getters'

import { UnstyledButton } from './UnstyledButton'

export const TextButton = styled(UnstyledButton)`
  color: ${getColor('primary')};
  font-weight: 500;

  ${transition};

  &:hover {
    color: ${getHoverVariant('primary')};
  }
`
