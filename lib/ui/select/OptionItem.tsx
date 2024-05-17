import styled, { css } from 'styled-components'
import { ComponentWithActiveState } from '../props'
import { borderRadius } from '../css/borderRadius'
import { interactive } from '../css/interactive'
import { getColor } from '../theme/getters'

export const OptionItem = styled.div<ComponentWithActiveState>`
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
