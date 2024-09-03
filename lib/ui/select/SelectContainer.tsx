import styled from 'styled-components'
import { borderRadius } from '@lib/ui/css/borderRadius'
import { getColor } from '@lib/ui/theme/getters'
import { toSizeUnit } from '../css/toSizeUnit'
import { HStack } from '@lib/ui/css/stack'

export const selectContainerMinHeight = 40

export const SelectContainer = styled(HStack)`
  ${borderRadius.s};
  border: 1px solid ${getColor('mist')};
  padding: 8px 12px;
  background: ${getColor('foreground')};

  align-items: center;
  gap: 8px;
  justify-content: space-between;
  min-height: ${toSizeUnit(selectContainerMinHeight)};

  font-size: 14px;

  outline: 1px solid transparent;
  &:focus,
  &:active {
    outline: 1px solid ${getColor('contrast')};
  }
`
