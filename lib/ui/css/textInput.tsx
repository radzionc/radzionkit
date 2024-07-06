import { css } from 'styled-components'
import { getColor } from '../theme/getters'
import { transition } from '../css/transition'
import { toSizeUnit } from './toSizeUnit'
import { borderRadius } from './borderRadius'
import { horizontalPadding } from './horizontalPadding'

export const textInputHorizontalPadding = 12
export const textInputHeight = 52
export const textInputBorderRadius = borderRadius.s

export const textInputFrame = css`
  height: ${toSizeUnit(textInputHeight)};
  width: 100%;
  ${horizontalPadding(textInputHorizontalPadding)};
  ${textInputBorderRadius};
`

export const textInput = css`
  ${textInputFrame};
  ${transition};
  font-size: 14px;

  background: ${getColor('foreground')};
  color: ${getColor('text')};

  &::placeholder {
    color: ${getColor('textShy')};
  }

  outline: 1px solid transparent;
  border: 1px solid ${getColor('mist')};

  &:hover {
    outline-color: ${getColor('mist')};
  }

  &:focus,
  &:active {
    border-color: ${getColor('mistExtra')};
    border-color: ${getColor('mistExtra')};
  }
`
