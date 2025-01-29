import styled from 'styled-components'

import { sameDimensions } from '../../css/sameDimensions'
import { round } from '../../css/round'
import { transition } from '../../css/transition'
import { centerContent } from '../../css/centerContent'
import { getColor } from '../../theme/getters'
import { IsActiveProp } from '../../props'
import {
  SwitchSize,
  getControlSize,
  getSwitchWidth,
  switchConfig,
} from './config'
import { toSizeUnit } from '../../css/toSizeUnit'

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
