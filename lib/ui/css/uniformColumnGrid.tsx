import styled, { css } from 'styled-components'

import { toSizeUnit } from '../css/toSizeUnit'

export type UniformColumnGridParams = {
  gap: number
  minChildrenWidth?: number
  maxChildrenWidth?: number
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
  maxChildrenWidth,
  maxColumns,
  gap,
  childrenWidth,
}: UniformColumnGridParams) => {
  if (childrenWidth !== undefined) {
    return toSizeUnit(childrenWidth)
  }

  return `
    minmax(
      max(
        ${toSizeUnit(minChildrenWidth || 0)},
        ${getColumnMax(maxColumns, gap)}
      ),
      ${maxChildrenWidth ? toSizeUnit(maxChildrenWidth) : '1fr'}
  )`
}

export const uniformColumnGrid = (params: UniformColumnGridParams) => css`
  display: grid;
  grid-template-columns: repeat(auto-fit, ${getColumnWidth(params)});
  gap: ${toSizeUnit(params.gap)};
  ${params.rowHeight &&
  css`
    grid-auto-rows: ${toSizeUnit(params.rowHeight)};
  `}
  ${params.fullWidth &&
  css`
    width: 100%;
  `}
`

export const UniformColumnGrid = styled.div<UniformColumnGridParams>`
  ${uniformColumnGrid}
`
