import React from "react";
import styled, { css } from "styled-components";
import { getCSSUnit } from "./utils/getCSSUnit";

interface Props {
  height?: React.CSSProperties["height"];
  width?: React.CSSProperties["width"];
}

export const Spacer = styled.div<Props>`
  ${({ height }) =>
    height &&
    css`
      min-height: ${getCSSUnit(height)};
    `}
  ${({ width }) =>
    width &&
    css`
      min-width: ${getCSSUnit(width)};
    `}
`;
