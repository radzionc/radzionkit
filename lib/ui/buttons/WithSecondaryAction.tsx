import { HStack } from '@lib/ui/css/stack'
import styled from 'styled-components'
import { horizontalPadding } from '@lib/ui/css/horizontalPadding'
import { getColor } from '@lib/ui/theme/getters'
import { toSizeUnit } from '@lib/ui/css/toSizeUnit'
import { centerContent } from '@lib/ui/css/centerContent'
import { interactive } from '@lib/ui/css/interactive'
import { borderRadius } from '@lib/ui/css/borderRadius'

const height = 44

export const WithSecondaryAction = styled(HStack)`
  ${interactive};
  height: ${toSizeUnit(height)};
  border: 2px solid ${getColor('transparent')};
  background: ${getColor('mistExtra')};
  gap: 2px;
  ${borderRadius.m};
  overflow: hidden;

  > * {
    background: ${getColor('background')};
    height: 100%;
    color: ${getColor('text')};

    &:first-child {
      ${horizontalPadding(12)};
    }

    &:nth-child(2) {
      width: ${toSizeUnit(height)};
      ${centerContent};
      outline: none;
      font-size: 16px;
    }

    &:hover {
      background: ${getColor('foreground')};
      color: ${getColor('contrast')};
    }
  }
`