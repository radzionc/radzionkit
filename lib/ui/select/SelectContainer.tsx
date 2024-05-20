import styled from 'styled-components'
import { borderRadius } from '@lib/ui/css/borderRadius'
import { getColor } from '@lib/ui/theme/getters'
import { transition } from '@lib/ui/css/transition'
import { toSizeUnit } from '../css/toSizeUnit'
import { HStack } from '../layout/Stack'

export const selectContainerMinHeight = 40

export const SelectContainer = styled(HStack)`
  ${borderRadius.s};
  border: 1px solid ${getColor('mist')};
  padding: 8px 12px;
  background: ${getColor('foreground')};
  ${transition};

  align-items: center;
  gap: 4px;
  justify-content: space-between;
  min-height: ${toSizeUnit(selectContainerMinHeight)};

  font-size: 14px;

  outline: 1px solid transparent;
  &:focus,
  &:active {
    outline: 1px solid ${getColor('contrast')};
  }
`
