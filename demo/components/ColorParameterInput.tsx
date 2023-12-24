import { range } from '@radzionkit/utils/array/range'
import { toPercents } from '@radzionkit/utils/toPercents'
import { PressTracker } from '@radzionkit/ui/base/PressTracker'
import {
  InvisibleHTMLSlider,
  InvisibleHTMLSliderProps,
} from '@radzionkit/ui/inputs/Slider/InvisibleHtmlSlider'
import { getColor } from '@radzionkit/ui/theme/getters'
import { centerContent } from '@radzionkit/ui/css/centerContent'
import { sameDimensions } from '@radzionkit/ui/css/sameDimensions'
import styled from 'styled-components'
import { interactive } from '@radzionkit/ui/css/interactive'
import { toSizeUnit } from '@radzionkit/ui/css/toSizeUnit'
import { defaultTransition } from '@radzionkit/ui/css/transition'

export interface ColorParameterInputProps
  extends Omit<InvisibleHTMLSliderProps, 'min'> {
  getColor: (param: number) => string
}

const railHeight = 20
const controlBorderWidth = 2
const controlSize = railHeight + controlBorderWidth * 2

const Control = styled.div<{ value: number }>`
  position: absolute;
  left: ${({ value }) =>
    `calc(${toPercents(value)} - ${toSizeUnit(controlSize / 2)})`};
  ${sameDimensions(controlSize)};
  transition: outline ${defaultTransition};
  outline: 6px solid transparent;
  border: ${toSizeUnit(controlBorderWidth)} solid ${getColor('contrast')};
  border-radius: 4px;
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
  height: ${toSizeUnit(railHeight)};

  border-radius: 4px;
`

export const ColorParameterInput = ({
  value,
  onChange,
  max,
  step,
  getColor,
}: ColorParameterInputProps) => {
  const colors = range(Math.round(max / step)).map((index) =>
    getColor(index * step),
  )
  return (
    <PressTracker
      onChange={({ position }) => {
        if (position) {
          onChange(Math.round((position.x * max) / step) * step)
        }
      }}
      render={({ props }) => (
        <Container {...props}>
          <InvisibleHTMLSlider
            step={step}
            value={value}
            onChange={onChange}
            min={0}
            max={max}
          />
          <Line
            style={{
              background: `linear-gradient(to right, ${colors.join(', ')})`,
            }}
          />
          <Control value={value / max} />
        </Container>
      )}
    />
  )
}
