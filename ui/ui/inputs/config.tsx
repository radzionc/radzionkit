import { css } from "styled-components"
import { getColor } from "../theme/getters"

export const inputBorderRadiusCSS = css`
  border-radius: 8px;
`

export const defaultInputHeight = "52px"

export const defaultInputShapeCSS = css`
  height: ${defaultInputHeight};
  width: 100%;
  padding: 12px;
  ${inputBorderRadiusCSS};
`

export const inputBackgroundCSS = css`
  background: ${getColor("mist")};
`
