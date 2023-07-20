import { css } from "styled-components"

export const croppedTextCSS = css`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`

export const getCroppedTextCSS = (maxLines: number) => css`
  display: -webkit-box;
  -webkit-line-clamp: ${maxLines};
  -webkit-box-orient: vertical;
  overflow: hidden;
`
