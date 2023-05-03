import styled, { css } from 'styled-components';
import { getCSSUnit } from 'lib/ui/utils/getCSSUnit';

interface Props {
  gap: number;
  minChildrenWidth?: number;
  childrenWidth?: number;
  rowHeight?: number;
  fullWidth?: boolean;
  maxColumns?: number;
}

const getColumnMax = (maxColumns: number | undefined, gap: number) => {
  if (!maxColumns) return `0px`;

  const gapCount = maxColumns - 1;
  const totalGapWidth = `calc(${gapCount} * ${getCSSUnit(gap)})`;

  return `calc((100% - ${totalGapWidth}) / ${maxColumns})`;
}

const getColumnWidth = ({ minChildrenWidth, maxColumns, gap, childrenWidth }: Props) => {
  if (childrenWidth !== undefined) {
    return getCSSUnit(childrenWidth)
  }

  return `
    minmax(
      max(
        ${getCSSUnit(minChildrenWidth || 0)},
        ${getColumnMax(maxColumns, gap)}
      ),
      1fr
  )`
}

export const SameWidthChildrenRow = styled.div<Props>`
  display: grid;
  grid-template-columns: repeat(
    auto-fit,
    ${getColumnWidth}
  );
  gap: ${({ gap }) => getCSSUnit(gap)};
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
