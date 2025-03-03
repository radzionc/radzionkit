import styled, { css } from 'styled-components'

import { interactive } from '../css/interactive'
import { IsActiveProp, IsDisabledProp } from '../props'
import { getHoverVariant } from '../theme/getHoverVariant'
import { getColor } from '../theme/getters'

import { ExpandableSelectorToggle } from './ExpandableSelectorToggle'
import { SelectContainer } from './SelectContainer'

type ExpandableSelectorContainerProps = IsActiveProp & IsDisabledProp

export const ExpandableSelectorContainer = styled(
  SelectContainer,
)<ExpandableSelectorContainerProps>`
  ${({ isDisabled }) =>
    isDisabled
      ? css`
          pointer-events: none;
          opacity: 0.4;
        `
      : css`
          ${interactive};

          &:hover {
            background: ${getHoverVariant('foreground')};
            ${ExpandableSelectorToggle} {
              color: ${getColor('contrast')};
            }
          }
        `}

  outline: 1px solid transparent;

  flex-shrink: 0;

  ${({ isActive }) =>
    isActive &&
    css`
      background: ${getHoverVariant('foreground')};
      ${ExpandableSelectorToggle} {
        color: ${getColor('contrast')};
      }
      outline: 1px solid ${getColor('text')};
    `}

  &:active, &:focus {
    outline: 1px solid ${getColor('text')};
  }
`
