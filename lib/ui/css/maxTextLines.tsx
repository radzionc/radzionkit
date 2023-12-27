import { css } from 'styled-components'

export const maxTextLines = (number: number) => css`
  display: -webkit-box;
  -webkit-line-clamp: ${number};
  -webkit-box-orient: vertical;
  overflow: hidden;
`
