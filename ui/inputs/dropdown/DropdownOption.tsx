import styled, { css } from 'styled-components'
import { transition } from '../../css/transition'
import { interactive } from '../../css/interactive'
import { horizontalPadding } from '../../css/horizontalPadding'
import { textInputPadding } from '../../css/textInput'
import { verticalPadding } from '../../css/verticalPadding'
import { getColor } from '../../theme/getters'

export const DropdownOption = styled.div<{ isActive: boolean }>`
  width: 100%;
  ${transition};
  ${interactive};
  outline: none;

  ${horizontalPadding(textInputPadding)};
  ${verticalPadding(8)}
  ${({ isActive }) =>
    isActive &&
    css`
      background: ${getColor('mist')};
      color: ${getColor('contrast')};
    `}
`
