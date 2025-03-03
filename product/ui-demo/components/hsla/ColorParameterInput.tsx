import { PressTracker } from '@lib/ui/base/PressTracker'
import { centerContent } from '@lib/ui/css/centerContent'
import { interactive } from '@lib/ui/css/interactive'
import { sameDimensions } from '@lib/ui/css/sameDimensions'
import { toSizeUnit } from '@lib/ui/css/toSizeUnit'
import { defaultTransition } from '@lib/ui/css/transition'
import {
  InvisibleHTMLSlider,
  InvisibleHTMLSliderProps,
} from '@lib/ui/inputs/Slider/InvisibleHtmlSlider'
import { getColor } from '@lib/ui/theme/getters'
import { range } from '@lib/utils/array/range'
import { toPercents } from '@lib/utils/toPercents'
import { useCallback } from 'react'
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
  const colors: string[] = range(Math.round(max / step)).map((index: number) =>
    getColor(index * step),
  )

  const handlePressTrackerChange = useCallback(
    ({
      position,
    }: {
      position: { x: number; y: number } | null
      clientPosition: { x: number; y: number } | null
    }) => {
      if (position) {
        onChange(Math.round((position.x * max) / step) * step)
      }
    },
    [onChange, max, step],
  )

  return (
    <PressTracker
      onChange={handlePressTrackerChange}
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
