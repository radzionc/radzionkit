import styled from 'styled-components'

import { InvisibleInput } from '../InvisibleInput'

export interface InvisibleHTMLSliderProps {
  min: number
  max: number
  value: number
  step: number
  autoFocus?: boolean
  onChange: (value: number) => void
}

const SliderInput = styled(InvisibleInput)`
  white-space: nowrap;
  width: 100%;
  direction: ltr;
`

export const InvisibleHTMLSlider = ({
  min,
  max,
  step,
  autoFocus,
  value,
  onChange,
}: InvisibleHTMLSliderProps) => (
  <SliderInput
    type="range"
    min={min}
    max={max}
    step={step}
    autoFocus={autoFocus}
    value={value}
    onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
      onChange(Number(event.currentTarget.value))
    }}
  />
)
