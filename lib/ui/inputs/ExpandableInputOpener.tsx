import styled, { css } from 'styled-components'

import { UnstyledButton } from '../buttons/UnstyledButton'
import { borderRadius } from '../css/borderRadius'
import { centerContent } from '../css/centerContent'
import { sameDimensions } from '../css/sameDimensions'
import { textInputHeight } from '../css/textInput'
import { transition } from '../css/transition'
import { IsActiveProp } from '../props'
import { getHoverVariant } from '../theme/getHoverVariant'
import { getColor } from '../theme/getters'

export const ExpandableInputOpener = styled(UnstyledButton)<IsActiveProp>`
  ${centerContent}
  ${borderRadius.m}
  ${transition}

  ${sameDimensions(textInputHeight)};
  border: 1px solid transparent;

  background: transparent;
  outline: none;

  ${({ isActive }) =>
    isActive &&
    css`
      background: ${getHoverVariant('foreground')};
      border-color: ${getColor('contrast')};
    `}

  &:focus {
    border-color: ${getColor('text')};
  }

  &:hover {
    background: ${getHoverVariant('foreground')};
  }
`
