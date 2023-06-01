import styled from 'styled-components'

export interface InvisibleHTMLSliderProps {
  min: number
  max: number
  value: number
  step: number
  autoFocus?: boolean
  onChange: (value: number) => void
}

const SliderInput = styled.input`
  border: 0;
  clip: rect(0 0 0 0);
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;

  height: 100%;
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
    onChange={(event) => {
      onChange(Number(event.currentTarget.value))
    }}
  />
)
