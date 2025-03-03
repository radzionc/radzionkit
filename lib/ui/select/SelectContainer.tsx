import { borderRadius } from '@lib/ui/css/borderRadius'
import { hStack } from '@lib/ui/css/stack'
import { getColor } from '@lib/ui/theme/getters'
import styled from 'styled-components'

import { UnstyledButton } from '../buttons/UnstyledButton'
import { horizontalPadding } from '../css/horizontalPadding'
import { toSizeUnit } from '../css/toSizeUnit'

export const selectContainerMinHeight = 40

export const SelectContainer = styled(UnstyledButton)`
  ${hStack({
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 8,
  })}

  ${borderRadius.s};
  border: 1px solid ${getColor('mist')};
  ${horizontalPadding(12)};
  background: ${getColor('foreground')};

  min-height: ${toSizeUnit(selectContainerMinHeight)};

  font-size: 14px;

  outline: 1px solid transparent;
  &:focus,
  &:active {
    outline: 1px solid ${getColor('contrast')};
  }
`
