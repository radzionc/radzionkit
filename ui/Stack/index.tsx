import React from "react";
import styled, { css } from "styled-components";
import { getCSSUnit } from "ui/utils/getCSSUnit";

interface Props {
  gap?: React.CSSProperties["gap"];
  alignItems?: React.CSSProperties["alignItems"];
  justifyContent?: React.CSSProperties["justifyContent"];
  children: React.ReactNode;
  wrap?: React.CSSProperties["flexWrap"];
  fullWidth?: boolean;
  fullHeight?: boolean;
}

const stackCSS = css<Props>`
  display: flex;
  ${({ gap }) =>
    gap &&
    css`
      gap: ${getCSSUnit(gap)};
    `}
  ${({ alignItems }) =>
    alignItems &&
    css`
      align-items: ${alignItems};
    `}
  ${({ justifyContent }) =>
    justifyContent &&
    css`
      justify-content: ${justifyContent};
    `}
  ${({ wrap }) =>
    wrap &&
    css`
      flex-wrap: ${wrap};
    `}
  ${({ fullWidth }) =>
    fullWidth &&
    css`
      width: 100%;
    `}
  ${({ fullHeight }) =>
    fullHeight &&
    css`
      height: 100%;
    `}
`;

export const VStack = styled.div`
  ${stackCSS}
  flex-direction: column;
`;

export const HStack = styled.div`
  ${stackCSS}
  flex-direction: row;
`;
