import { borderRadius } from '@lib/ui/css/borderRadius'
import { transition } from '@lib/ui/css/transition'
import { getColor } from '@lib/ui/theme/getters'
import styled, { css } from 'styled-components'

export const VideoHighlight = styled.div<{ isActive: boolean }>`
  ${borderRadius.m};
  overflow: hidden;
  ${transition}
  border: 1px solid transparent;
  ${({ isActive, theme }) =>
    !isActive &&
    css`
      border-color: ${getColor('primary')};
      box-shadow: 0 0 20px 5px
        ${theme.colors.primary.getVariant({ a: () => 0.8 }).toCssValue()};
    `}
`
