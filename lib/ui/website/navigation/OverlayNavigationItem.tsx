import styled from 'styled-components'

import { UnstyledButton } from '../../buttons/UnstyledButton'
import { transition } from '../../css/transition'
import { getColor } from '../../theme/getters'

export const OverlayNavigationItem = styled(UnstyledButton)`
  width: 100%;
  padding: 16px 24px;
  ${transition};
  font-weight: 500;
  &:hover {
    color: ${getColor('contrast')};
    background: ${getColor('mist')};
  }
`
