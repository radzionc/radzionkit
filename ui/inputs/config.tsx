import { css } from "styled-components";

export const inputBorderRadiusCSS = css`
  border-radius: 8px;
`;

export const defaultInputShapeCSS = css`
  height: 48px;
  ${inputBorderRadiusCSS};
`;

export const inputBackgroundCSS = css`
  background: ${({ theme }) => theme.colors.backgroundGlass.toCssValue()};
`;
