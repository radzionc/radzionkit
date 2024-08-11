import styled from 'styled-components'

import { HStack } from '../../layout/Stack'
import { Text } from '../../text'
import { sameDimensions } from '../../css/sameDimensions'
import { round } from '../../css/round'
import { transition } from '../../css/transition'
import { centerContent } from '../../css/centerContent'
import { interactive } from '../../css/interactive'
import { toSizeUnit } from '../../css/toSizeUnit'
import { getColor, matchColor } from '../../theme/getters'
import {
  UIComponentProps,
  InputProps,
  ComponentWithActiveState,
} from '../../props'
import { match } from '@lib/utils/match'
import { ReactNode } from 'react'
import { InvisibleHTMLCheckbox } from '../InvisibleHTMLCheckbox'

type SwitchSize = 'm' | 's'

type SwitchProps = UIComponentProps &
  InputProps<boolean> & {
    size?: SwitchSize
    label?: ReactNode
  }
const switchHeight: Record<SwitchSize, number> = { m: 24, s: 20 }
const spacing = 2

const getControlSize = (size: SwitchSize) => switchHeight[size] - spacing * 2
const getSwitchWidth = (size: SwitchSize) => switchHeight[size] * 1.58

const Control = styled.div<ComponentWithActiveState & { size: SwitchSize }>`
  ${({ size }) => sameDimensions(getControlSize(size))};

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

const Wrapper = styled(HStack)`
  ${interactive};

  color: ${getColor('textSupporting')};
  ${transition};

  &:hover {
    color: ${getColor('text')};
  }

  &:hover ${Control} {
    transform: scale(1.08);
  }
`

const Container = styled.div<{ isActive: boolean; size: SwitchSize }>`
  width: ${({ size }) => toSizeUnit(getSwitchWidth(size))};
  height: ${({ size }) => toSizeUnit(switchHeight[size])};
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

export const Switch = ({
  value,
  onChange,
  label,
  size = 'm',
  ...rest
}: SwitchProps) => {
  return (
    <Wrapper as="label" alignItems="center" gap={8} {...rest}>
      <Container size={size} isActive={value}>
        <Control
          isActive={value}
          size={size}
          style={{
            marginLeft: value
              ? getSwitchWidth(size) - getControlSize(size) - spacing
              : spacing,
          }}
        />
        <InvisibleHTMLCheckbox value={value} onChange={onChange} />
      </Container>
      {label && (
        <Text
          size={match(size, { m: () => 16, s: () => 14 })}
          weight="500"
          as="div"
        >
          {label}
        </Text>
      )}
    </Wrapper>
  )
}
