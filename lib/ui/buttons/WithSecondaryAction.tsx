import { borderRadius } from '@lib/ui/css/borderRadius'
import { centerContent } from '@lib/ui/css/centerContent'
import { horizontalPadding } from '@lib/ui/css/horizontalPadding'
import { interactive } from '@lib/ui/css/interactive'
import { hStack } from '@lib/ui/css/stack'
import { toSizeUnit } from '@lib/ui/css/toSizeUnit'
import { getColor } from '@lib/ui/theme/getters'
import styled, { css } from 'styled-components'

type WithSecondaryActionParams = {
  height?: number
}

export const withSecondaryAction = ({
  height = 44,
}: WithSecondaryActionParams) => css`
  ${interactive};
  ${hStack({
    gap: 2,
  })}
  height: ${toSizeUnit(height)};
  border: 2px solid ${getColor('transparent')};
  background: ${getColor('mistExtra')};
  ${borderRadius.m};
  overflow: hidden;

  > * {
    background: ${getColor('background')};
    height: 100%;
    color: ${getColor('text')};

    &:hover {
      background: ${getColor('foreground')};
      color: ${getColor('contrast')};
    }

    &:first-child {
      ${horizontalPadding(12)};
    }

    &:nth-child(2) {
      width: ${toSizeUnit(height)};
      ${centerContent};
      outline: none;
      font-size: 16px;
    }
  }
`

export const WithSecondaryAction = styled.div<WithSecondaryActionParams>`
  ${withSecondaryAction};
`
