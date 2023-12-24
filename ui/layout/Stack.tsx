import React from 'react'
import styled, { css } from 'styled-components'
import { toSizeUnit } from '../css/toSizeUnit'

interface FixedDirectionStackProps {
  gap?: React.CSSProperties['gap']
  alignItems?: React.CSSProperties['alignItems']
  justifyContent?: React.CSSProperties['justifyContent']
  wrap?: React.CSSProperties['flexWrap']
  fullWidth?: boolean
  fullHeight?: boolean
  children?: React.ReactNode
}

const formatFlexAlignment = (
  value:
    | React.CSSProperties['alignItems']
    | React.CSSProperties['justifyContent'],
) => {
  if (value === 'end' || value === 'start') {
    return `flex-${value}`
  }

  return value
}

const stack = css<FixedDirectionStackProps>`
  display: flex;
  ${({ gap }) =>
    gap &&
    css`
      gap: ${toSizeUnit(gap)};
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

export const VStack = styled.div<FixedDirectionStackProps>`
  ${stack}
  flex-direction: column;
`

export const HStack = styled.div<FixedDirectionStackProps>`
  ${stack}
  flex-direction: row;
`

export interface StackProps extends FixedDirectionStackProps {
  direction: React.CSSProperties['flexDirection']
}

export const Stack = styled.div<StackProps>`
  ${stack}
  flex-direction: ${({ direction }) => direction};
`
