import styled from 'styled-components'

import { round } from '../../css/round'
import { toSizeUnit } from '../../css/toSizeUnit'
import { transition } from '../../css/transition'
import { matchColor } from '../../theme/getters'

import { SwitchSize, getSwitchWidth, switchConfig } from './config'

export const SwitchContainer = styled.div<{
  isActive: boolean
  size: SwitchSize
}>`
  width: ${({ size }) => toSizeUnit(getSwitchWidth(size))};
  height: ${({ size }) => toSizeUnit(switchConfig.height[size])};
  background: ${matchColor('isActive', {
    true: 'primary',
    false: 'textShy',
  })};

  display: flex;
  align-items: center;

  position: relative;

  ${round};

  ${transition};
`
