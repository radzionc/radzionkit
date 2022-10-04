import styled from "styled-components";
import { HSLA } from "./colors/HSLA";
import { centerContentCSS } from "./utils/centerContentCSS";
import { getSameDimensionsCSS } from "./utils/getSameDimensionsCSS";
import { roundedCSS } from "./utils/roundedCSS";

interface Props {
  size: number;
  background?: HSLA;
}

export const Circle = styled.div<Props>`
  ${centerContentCSS}
  background: ${({ background }) => background?.toCssValue()};
  ${roundedCSS}
  ${({ size }) => getSameDimensionsCSS(size)}
`;
