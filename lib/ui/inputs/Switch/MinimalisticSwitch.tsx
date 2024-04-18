import styled, { useTheme } from 'styled-components'
import { Text } from '../../text'

import { getColor } from '../../theme/getters'
import { HStack } from '../../layout/Stack'
import { sameDimensions } from '../../css/sameDimensions'
import { round } from '../../css/round'
import { transition } from '../../css/transition'
import { centerContent } from '../../css/centerContent'
import { toSizeUnit } from '../../css/toSizeUnit'

interface SwitchProps {
  value: boolean
  onChange: (value: boolean) => void
  label?: string
}

const height = 20
export const switchWidth = 36
export const switchLabelDistance = 8
const spacing = 2
const controlSize = height - spacing * 2

const Control = styled.div`
  ${sameDimensions(controlSize)};

  ${round};
  ${transition};

  ${centerContent};
  color: ${getColor('contrast')};
  background: ${getColor('text')};
  font-size: 14px;
`

const Wrapper = styled(HStack)`
  cursor: pointer;
  user-select: none;

  color: ${getColor('text')};

  ${transition};

  :hover {
    color: ${getColor('contrast')};
  }

  :hover ${Control} {
    transform: scale(1.08);
  }
`

const Container = styled.div`
  width: ${toSizeUnit(switchWidth)};
  height: ${toSizeUnit(height)};

  display: flex;
  align-items: center;

  ${round};
  ${transition};
`

export const MinimalisticSwitch = ({ value, onChange, label }: SwitchProps) => {
  const { colors } = useTheme()
  return (
    <Wrapper
      onClick={() => onChange(!value)}
      as="label"
      alignItems="center"
      gap={switchLabelDistance}
      id={label}
    >
      <Container
        style={{
          background: (value ? colors.primary : colors.textShy).toCssValue(),
        }}
      >
        <Control
          style={{
            marginLeft: value ? switchWidth - controlSize - spacing : spacing,
          }}
        />
      </Container>
      {label && (
        <Text weight="semibold" size={14}>
          {label}
        </Text>
      )}
    </Wrapper>
  )
}
