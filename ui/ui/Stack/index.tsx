import React from 'react'
import styled, { css } from 'styled-components'
import { getCSSUnit } from '../utils/getCSSUnit'

interface Props {
  gap?: React.CSSProperties['gap']
  alignItems?: React.CSSProperties['alignItems']
  justifyContent?: React.CSSProperties['justifyContent']
  wrap?: React.CSSProperties['flexWrap']
  children: React.ReactNode
  fullWidth?: boolean
  fullHeight?: boolean
}

const formatFlexAlignment = (
  value:
    | React.CSSProperties['alignItems']
    | React.CSSProperties['justifyContent']
) => {
  if (value === 'end' || value === 'start') {
    return `flex-${value}`
  }

  return value
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
      align-items: ${formatFlexAlignment(alignItems)};
    `}
  ${({ justifyContent }) =>
    justifyContent &&
    css`
      justify-content: ${formatFlexAlignment(justifyContent)};
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
`

export const VStack = styled.div`
  ${stackCSS}
  flex-direction: column;
`

export const HStack = styled.div`
  ${stackCSS}
  flex-direction: row;
`

export interface StackProps extends Props {
  direction: React.CSSProperties['flexDirection']
}

export const Stack = styled.div<StackProps>`
  ${stackCSS}
  flex-direction: ${({ direction }) => direction};
`
