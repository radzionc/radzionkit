import { css } from 'styled-components'
import { getColor } from '../theme/getters'
import { transition } from '../css/transition'
import { toSizeUnit } from './toSizeUnit'

export const textInputPadding = 12
export const textInputHeight = 52
export const textInputBorderRadius = 8

export const textInputFrame = css`
  height: ${toSizeUnit(textInputHeight)};
  width: 100%;
  padding: ${toSizeUnit(textInputPadding)};
  border-radius: ${toSizeUnit(textInputBorderRadius)};
`

export const textInput = css`
  ${textInputFrame};
  ${transition};

  background: ${getColor('foreground')};
  color: ${getColor('text')};

  &::placeholder {
    color: ${getColor('textShy')};
  }

  outline: 1px solid transparent;
  border: 1px solid ${getColor('mist')};

  :hover {
    outline-color: ${getColor('mist')};
  }

  :focus,
  :active {
    border-color: ${getColor('mist')};
  }
`
