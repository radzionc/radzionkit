import { css } from "styled-components"
import { defaultTransitionCSS } from "lib/ui/animations/transitions"
import { defaultInputShapeCSS } from "./config"

interface CommonInputCSSProps {
  isValid: boolean
}

export const commonInputCSS = css<CommonInputCSSProps>`
  ${defaultInputShapeCSS};
  max-width: 100%;

  background: ${({ theme }) => theme.colors.mist.toCssValue()};
  color: ${({ theme }) => theme.colors.text.toCssValue()};

  ${defaultTransitionCSS};

  &::placeholder {
    color: ${({ theme }) => theme.colors.textShy.toCssValue()};
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
