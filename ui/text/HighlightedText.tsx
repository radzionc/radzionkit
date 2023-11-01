import styled, { DefaultTheme, css } from 'styled-components'

import { Text } from '.'
import { HSLA } from '../colors/HSLA'

export const getHighlightedTextCSS = (
  highlightColor: HSLA,
  { name }: DefaultTheme,
) => {
  const color =
    name === 'dark'
      ? highlightColor.getVariant({ l: (l) => l * 0.2 }).toCssValue()
      : highlightColor.getVariant({ a: (l) => l * 0.2 }).toCssValue()

  const background =
    name === 'dark' ? highlightColor.toCssValue() : highlightColor.toCssValue()

  return css`
    background: linear-gradient(
      180deg,
      transparent 8%,
      ${color} 8%,
      ${color} 92%,
      transparent 92%
    );
    color: ${background};
  `
}

export const HighlightedText = styled(Text)<{ $color: HSLA }>`
  font-style: inherit;
  font-weight: inherit;
  ${({ $color, theme }) => getHighlightedTextCSS($color, theme)};
`
