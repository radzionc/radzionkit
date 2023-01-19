import { css } from "styled-components";
import { defaultTransitionCSS } from "lib/ui/animations/transitions";
import { defaultInputShapeCSS } from "./config";

interface CommonInputCSSProps {
  isValid: boolean;
}

export const commonInputCSS = css<CommonInputCSSProps>`
  ${defaultInputShapeCSS};
  max-width: 100%;

  background: ${({ theme }) => theme.colors.backgroundGlass.toCssValue()};
  color: ${({ theme }) => theme.colors.text.toCssValue()};
  width: 100%;

  ${defaultTransitionCSS};

  &::placeholder {
    color: ${({ theme }) => theme.colors.textSupporting3.toCssValue()};
  }

  outline: 1px solid transparent;
  ${({ isValid, theme }) => {
    const errorColor = theme.colors.alert.toCssValue();
    const regularColor = isValid
      ? theme.colors.backgroundGlass.toCssValue()
      : errorColor;
    const activeColor = isValid
      ? theme.colors.backgroundGlass2.toCssValue()
      : errorColor;

    return css`
      border: 1px solid ${regularColor};

      :hover {
        outline-color: ${regularColor};
      }

      :focus,
      :active {
        border-color: ${activeColor};
      }
    `;
  }}
`;
