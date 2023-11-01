import React from 'react'
import styled, { css } from 'styled-components'
import { toSizeUnit } from '../css/toSizeUnit'

interface Props {
  height?: React.CSSProperties['height']
  width?: React.CSSProperties['width']
}

export const Spacer = styled.div<Props>`
  ${({ height }) =>
    height &&
    css`
      min-height: ${toSizeUnit(height)};
    `}
  ${({ width }) =>
    width &&
    css`
      min-width: ${toSizeUnit(width)};
    `}
`
