import { css } from "styled-components"
import { defaultTransitionCSS } from "ui/animations/transitions"
import { defaultInputShapeCSS } from "./config"
import { getColor } from "../theme/getters"

interface CommonInputCSSProps {
  isValid: boolean
}

export const commonInputCSS = css<CommonInputCSSProps>`
  ${defaultInputShapeCSS};
  max-width: 100%;

  background: ${getColor("mist")};
  color: ${getColor("text")};

  ${defaultTransitionCSS};

  &::placeholder {
    color: ${getColor("textShy")};
  }

  outline: 1px solid transparent;
  ${({ isValid, theme }) => {
    const errorColor = theme.colors.alert.toCssValue()
    const regularColor = isValid ? theme.colors.mist.toCssValue() : errorColor
    const activeColor = isValid
      ? theme.colors.mistExtra.toCssValue()
      : errorColor

    return css`
      border: 1px solid ${regularColor};

      :hover {
        outline-color: ${regularColor};
      }

      :focus,
      :active {
        border-color: ${activeColor};
      }
    `
  }}
`
