import styled, { css } from "styled-components";
import { getCSSUnit } from "lib/ui/utils/getCSSUnit";

interface Props {
  gap?: number;
  minChildrenWidth?: number;
  rowHeight?: number;
  fullWidth?: boolean;
}

export const SameWidthChildrenRow = styled.div<Props>`
  display: grid;
  grid-template-columns: repeat(
    auto-fit,
    minmax(${({ minChildrenWidth }) => getCSSUnit(minChildrenWidth || 0)}, 1fr)
  );
  ${({ gap }) =>
    gap &&
    css`
      gap: ${getCSSUnit(gap)};
    `}
  ${({ rowHeight }) =>
    rowHeight &&
    css`
      grid-auto-rows: ${getCSSUnit(rowHeight)};
    `}
  ${({ fullWidth }) =>
    fullWidth &&
    css`
      width: 100%;
    `}
`;
