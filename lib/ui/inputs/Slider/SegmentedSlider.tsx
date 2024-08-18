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
import { HSLA } from '../../colors/HSLA'
import { UniformColumnGrid } from '../../css/uniformColumnGrid'

type SegmentedSliderProps = InputProps<number> & {
  max: number
  color: HSLA
}

const sliderConfig = {
  railHeight: 20,
  controlSize: 24,
}

const Control = styled.div`
  transition: outline ${defaultTransition};
  outline: 4px solid transparent;
  width: 8px;
  height: ${toSizeUnit(sliderConfig.controlSize)};
  background: ${getColor('contrast')};
  border-radius: 2px;
`

const Container = styled.label`
  width: 100%;
  height: ${toSizeUnit(sliderConfig.controlSize + 4)};
  ${interactive};
  ${centerContent};
  position: relative;

  &:focus-within ${Control} {
    outline: 8px solid ${getColor('mistExtra')};
  }

  &:hover ${Control} {
    outline-color: ${getColor('mist')};
  }
`

const Line = styled(UniformColumnGrid)`
  width: 100%;
  height: ${toSizeUnit(sliderConfig.railHeight)};

  border-radius: 4px;
  position: relative;
  overflow: hidden;
`

const Section = styled.div``

export const SegmentedSlider = ({
  value,
  onChange,
  max,
  color,
}: SegmentedSliderProps) => {
  const { colors } = useTheme()

  const xPosition = toPercents(value / max)

  return (
    <PressTracker
      onChange={({ position }) => {
        if (position) {
          const newValue = Math.round(position.x * max)
          if (newValue !== value) {
            onChange(newValue)
          }
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
          <Line gap={1}>
            {range(max).map((index) => (
              <Section
                style={{
                  background: (index < value
                    ? color
                    : colors.mist
                  ).toCssValue(),
                }}
                key={index}
              />
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
