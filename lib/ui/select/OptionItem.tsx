import styled, { css } from 'styled-components'

import { borderRadius } from '../css/borderRadius'
import { interactive } from '../css/interactive'
import { IsActiveProp } from '../props'
import { getColor } from '../theme/getters'

export const OptionItem = styled.div<IsActiveProp>`
  outline: none;
  ${interactive};
  color: ${getColor('textSupporting')};
  position: relative;
  padding: 8px;
  ${borderRadius.s}

  ${({ isActive }) =>
    isActive &&
    css`
      background: ${getColor('mist')};
      color: ${getColor('contrast')};
    `}
`
