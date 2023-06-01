import { css } from 'styled-components'
import { roundedCSS } from './roundedCSS'

export const themedScrollbarCSS = css`
  &::-webkit-scrollbar {
    width: 8px;
  }
  &::-webkit-scrollbar-track {
    background-color: transparent;
  }

  &::-webkit-scrollbar-thumb {
    ${roundedCSS}
    cursor: pointer;
    background-color: ${({ theme: { colors } }) =>
      colors.backgroundGlass.toCssValue()};
    :hover {
      background-color: ${({ theme: { colors } }) =>
        colors.backgroundGlass2.toCssValue()};
    }
  }
`
