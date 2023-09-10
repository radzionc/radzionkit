import styled, { css } from 'styled-components'
import { toSizeUnit } from '../../css/toSizeUnit'

interface Props {
  gap: number
  minChildrenWidth?: number
  childrenWidth?: number
  rowHeight?: number
  fullWidth?: boolean
  maxColumns?: number
}

const getColumnMax = (maxColumns: number | undefined, gap: number) => {
  if (!maxColumns) return `0px`

  const gapCount = maxColumns - 1
  const totalGapWidth = `calc(${gapCount} * ${toSizeUnit(gap)})`

  return `calc((100% - ${totalGapWidth}) / ${maxColumns})`
}

const getColumnWidth = ({
  minChildrenWidth,
  maxColumns,
  gap,
  childrenWidth,
}: Props) => {
  if (childrenWidth !== undefined) {
    return toSizeUnit(childrenWidth)
  }

  return `
    minmax(
      max(
        ${toSizeUnit(minChildrenWidth || 0)},
        ${getColumnMax(maxColumns, gap)}
      ),
      1fr
  )`
}

export const SameWidthChildrenRow = styled.div<Props>`
  display: grid;
  grid-template-columns: repeat(auto-fit, ${getColumnWidth});
  gap: ${({ gap }) => toSizeUnit(gap)};
  ${({ rowHeight }) =>
    rowHeight &&
    css`
      grid-auto-rows: ${toSizeUnit(rowHeight)};
    `}
  ${({ fullWidth }) =>
    fullWidth &&
    css`
      width: 100%;
    `}
`
