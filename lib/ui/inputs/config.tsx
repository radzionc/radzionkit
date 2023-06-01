import { css } from 'styled-components'

export const inputBorderRadiusCSS = css`
  border-radius: 8px;
`

export const defaultInputShapeCSS = css`
  height: 52px;
  width: 100%;
  padding: 12px;
  ${inputBorderRadiusCSS};
`

export const inputBackgroundCSS = css`
  background: ${({ theme }) => theme.colors.backgroundGlass.toCssValue()};
`
