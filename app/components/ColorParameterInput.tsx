import { range } from '@reactkit/utils/array/range'
import { toPercents } from '@reactkit/utils/toPercents'
import { PressTracker } from '@reactkit/ui/ui/PressTracker'
import { defaultTransition } from '@reactkit/ui/ui/animations/transitions'
import {
  InvisibleHTMLSlider,
  InvisibleHTMLSliderProps,
} from '@reactkit/ui/ui/inputs/Slider/InvisibleHtmlSlider'
import { getColor } from '@reactkit/ui/ui/theme/getters'
import { centerContentCSS } from '@reactkit/ui/ui/utils/centerContentCSS'
import { getCSSUnit } from '@reactkit/ui/ui/utils/getCSSUnit'
import { getSameDimensionsCSS } from '@reactkit/ui/ui/utils/getSameDimensionsCSS'
import { interactiveCSS } from '@reactkit/ui/ui/utils/interactiveCSS'
import styled from 'styled-components'

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
    `calc(${toPercents(value)} - ${getCSSUnit(controlSize / 2)})`};
  ${getSameDimensionsCSS(controlSize)};
  transition: outline ${defaultTransition};
  outline: 6px solid transparent;
  border: ${getCSSUnit(controlBorderWidth)} solid ${getColor('contrast')};
  border-radius: 4px;
`

const Container = styled.label`
  width: 100%;
  height: 40px;
  ${interactiveCSS};
  ${centerContentCSS};
  position: relative;

  :focus-within ${Control} {
    outline: 12px solid ${getColor('mistExtra')};
  }

  :hover ${Control} {
    outline-color: ${getColor('mist')};
  }
`

const Line = styled.div`
  width: 100%;
  height: ${getCSSUnit(railHeight)};

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
