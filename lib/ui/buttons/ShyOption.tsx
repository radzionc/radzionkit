import styled, { css } from 'styled-components'

import { borderRadius } from '../css/borderRadius'
import { centerContent } from '../css/centerContent'
import { transition } from '../css/transition'
import { getColor } from '../theme/getters'

export const ShyOption = styled.div<{ isSelected: boolean }>`
  ${centerContent};
  ${borderRadius.s};
  padding: 8px;
  ${transition};
  color: ${getColor('text')};
  font-weight: 500;
  cursor: pointer;
  border: 1px solid ${getColor('mist')};

  ${({ isSelected }) =>
    isSelected
      ? css`
          background: ${getColor('mist')};
          color: ${getColor('contrast')};
          border-color: transparent;
        `
      : css`
          &:hover {
            background: ${getColor('mist')};
          }
        `}
`
