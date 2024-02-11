import styled, { useTheme } from 'styled-components'
import { PressTracker } from '../../base/PressTracker'
import { InputProps } from '../../props'
import { interactive } from '../../css/interactive'
import { centerContent } from '../../css/centerContent'
import { toSizeUnit } from '../../css/toSizeUnit'
import { defaultTransition } from '../../css/transition'
import { getColor } from '../../theme/getters'
import { InvisibleHTMLSlider } from './InvisibleHtmlSlider'
import { PositionAbsolutelyCenterVertically } from '../../layout/PositionAbsolutelyCenterVertically'
import { toPercents } from '@lib/utils/toPercents'
import { Center } from '../../layout/Center'
import { range } from '@lib/utils/array/range'
import { Text } from '../../text'
import { borderRadius } from '../../css/borderRadius'
import { HSLA } from '../../colors/HSLA'

type HoursInputProps = InputProps<number> & {
  max: number
  color: HSLA
}

const hoursInputConfig = {
  railHeight: 20,
  controlSize: 24,
}

const Control = styled.div`
  transition: outline ${defaultTransition};
  outline: 6px solid transparent;
  width: 8px;
  height: ${toSizeUnit(hoursInputConfig.railHeight + 4)};
  background: ${getColor('contrast')};
  ${borderRadius.s}
`

const Container = styled.label`
  width: 100%;
  height: 40px;
  ${interactive};
  ${centerContent};
  position: relative;

  &:focus-within ${Control} {
    outline: 12px solid ${getColor('mistExtra')};
  }

  &:hover ${Control} {
    outline-color: ${getColor('mist')};
  }
`

const Line = styled.div`
  width: 100%;
  height: ${toSizeUnit(hoursInputConfig.railHeight)};

  border-radius: 4px;
  position: relative;
`

export const HoursInput = ({
  value,
  onChange,
  max,
  color,
}: HoursInputProps) => {
  const { colors } = useTheme()

  const xPosition = toPercents(value / max)
  return (
    <PressTracker
      onChange={({ position }) => {
        if (position) {
          const newValue = Math.round(position.x * max)
          onChange(newValue)
        }
      }}
      render={({ props }) => (
        <Container {...props}>
          <InvisibleHTMLSlider
            step={1}
            value={value}
            onChange={onChange}
            min={0}
            max={max}
          />
          <Line
            style={{
              background: `linear-gradient(to right, ${color.toCssValue()}, ${color.toCssValue()} ${xPosition}, ${colors.mistExtra.toCssValue()} ${xPosition})`,
            }}
          >
            {range(max + 1).map((hour) => (
              <PositionAbsolutelyCenterVertically
                style={{ top: hoursInputConfig.railHeight + 4 }}
                left={toPercents(hour / max)}
              >
                <Center>
                  <Text
                    color={hour === value ? 'contrast' : 'supporting'}
                    size={12}
                  >
                    {hour}
                  </Text>
                </Center>
              </PositionAbsolutelyCenterVertically>
            ))}
          </Line>
          <PositionAbsolutelyCenterVertically left={xPosition} fullHeight>
            <Center>
              <Control />
            </Center>
          </PositionAbsolutelyCenterVertically>
        </Container>
      )}
    />
  )
}
