import { css } from 'styled-components'

import { getColor } from '../theme/getters'

import { borderRadius } from './borderRadius'
import { horizontalPadding } from './horizontalPadding'
import { toSizeUnit } from './toSizeUnit'

export const textInputHorizontalPadding = 12
export const textInputHeight = 52
export const textInputBorderRadius = borderRadius.s

export const textInputFrame = css`
  height: ${toSizeUnit(textInputHeight)};
  width: 100%;
  ${horizontalPadding(textInputHorizontalPadding)};
  ${textInputBorderRadius};
`

export const interactiveTextInput = css`
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

export const textInput = css`
  ${textInputFrame};
  font-size: 14px;

  background: ${getColor('foreground')};
  color: ${getColor('text')};

  &::placeholder {
    color: ${getColor('textShy')};
  }

  ${interactiveTextInput};
`

type TextInputAutoWidthParams = {
  value?: string | number | null
  placeholder?: string
  offset?: number
}

export const textInputAutoWidth = ({
  value,
  placeholder,
  offset = textInputHorizontalPadding * 2 + 4,
}: TextInputAutoWidthParams) => {
  let characters = 1
  if (value) {
    characters = value.toString().length
  } else if (placeholder) {
    characters = placeholder.length
  }

  const contentWidth = `${characters}ch`

  const width = `calc(${contentWidth} + ${toSizeUnit(offset)})`

  return css`
    width: ${width};
  `
}
