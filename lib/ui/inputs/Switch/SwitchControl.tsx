import styled from 'styled-components'

import { centerContent } from '../../css/centerContent'
import { round } from '../../css/round'
import { sameDimensions } from '../../css/sameDimensions'
import { toSizeUnit } from '../../css/toSizeUnit'
import { transition } from '../../css/transition'
import { IsActiveProp } from '../../props'
import { getColor } from '../../theme/getters'

import {
  SwitchSize,
  getControlSize,
  getSwitchWidth,
  switchConfig,
} from './config'

export const SwitchControl = styled.div<IsActiveProp & { size: SwitchSize }>`
  ${({ size }) => sameDimensions(getControlSize(size))};
  margin-left: ${({ isActive, size }) =>
    toSizeUnit(
      isActive
        ? getSwitchWidth(size) - getControlSize(size) - switchConfig.spacing
        : switchConfig.spacing,
    )};

  ${round};
  ${transition};

  ${centerContent};
  color: ${getColor('background')};

  background: ${({ isActive, theme: { colors } }) =>
    isActive
      ? colors.primary
          .getHighestContrast(colors.background, colors.contrast)
          .toCssValue()
      : colors.text.toCssValue()};
  font-size: 14px;
`
