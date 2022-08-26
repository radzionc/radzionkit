import React from 'react'
import styled, { css } from 'styled-components'
import { defaultBorderRadiusCSS } from 'ui/borderRadius'
import { getCSSUnit } from 'ui/utils/getCSSUnit'

interface Props {
  width?: React.CSSProperties['width']
  padding?: React.CSSProperties['padding']
}

export const Card = styled.div<Props>`
  background: ${({ theme }) =>
    theme.name === 'light'
      ? theme.colors.background.toCssValue()
      : theme.colors.backgroundGlass.toCssValue()};
  box-shadow: ${({ theme }) => theme.shadows.small};
  ${defaultBorderRadiusCSS};
  ${({ width }) =>
    width &&
    css`
      width: ${getCSSUnit(width)};
    `}
  ${({ padding }) =>
    css`
      padding: ${getCSSUnit(padding ?? 20)};
    `}
`
