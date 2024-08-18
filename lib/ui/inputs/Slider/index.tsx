import styled, { useTheme } from 'styled-components'
import { getColor } from '../../theme/getters'
import {
  InvisibleHTMLSliderProps,
  InvisibleHTMLSlider,
} from './InvisibleHtmlSlider'
import { toPercents } from '@lib/utils/toPercents'
import { PressTracker } from '../../base/PressTracker'
import { HSLA } from '../../colors/HSLA'
import { centerContent } from '../../css/centerContent'
import { sameDimensions } from '../../css/sameDimensions'
import { toSizeUnit } from '../../css/toSizeUnit'
import { defaultTransition } from '../../css/transition'

type SliderSize = 'm' | 'l'

export interface SliderProps extends InvisibleHTMLSliderProps {
  size?: SliderSize
  color?: HSLA
  height?: React.CSSProperties['height']
}

const Control = styled.div<{ value: number; size: number; $color: HSLA }>`
  position: absolute;
  left: ${({ value, size }) =>
    `calc(${toPercents(value)} - ${toSizeUnit(size / 2)})`};
  ${({ size }) => sameDimensions(size)};
  border-radius: 1000px;
  background: ${({ $color }) => $color.getVariant({ a: () => 1 }).toCssValue()};
  transition: outline ${defaultTransition};
  outline: 6px solid transparent;
`

const Container = styled.div<{ $color: HSLA }>`
  width: 100%;
  cursor: pointer;
  ${centerContent};
  position: relative;

  --active-outline-color: ${({ $color }) =>
    $color.getVariant({ a: (a) => a * 0.2 }).toCssValue()};

  &:focus-within ${Control} {
    outline: 12px solid var(--active-outline-color);
  }

  &:hover ${Control} {
    outline-color: var(--active-outline-color);
  }
`

const Line = styled.div`
  width: 100%;

  overflow: hidden;
  background-color: ${getColor('mist')};
  border-radius: 1000px;
`

const Filler = styled.div<{ value: number; $color: HSLA }>`
  height: 100%;
  width: ${({ value }) => value * 100}%;
  background: ${({ $color }) => $color.toCssValue()};
`

const controlSize: Record<SliderSize, number> = {
  m: 12,
  l: 20,
}

const lineHeight: Record<SliderSize, number> = {
  m: 4,
  l: 8,
}

export const Slider = ({
  value,
  onChange,
  min,
  max,
  step,
  autoFocus,
  size = 'm',
  color: optionalColor,
  height = 40,
}: SliderProps) => {
  const theme = useTheme()
  const color = optionalColor ?? theme.colors.text
  const ratio = value / max

  return (
    <PressTracker
      onChange={({ position }) => {
        if (position) {
          const steps = Math.round((position.x * max) / step)
          const newValue = Math.max(min, steps * step)
          if (newValue !== value) {
            onChange(newValue)
          }
        }
      }}
      render={({ props }) => (
        <Container style={{ height }} $color={color} {...props}>
          <InvisibleHTMLSlider
            step={step}
            value={value}
            onChange={onChange}
            min={min}
            max={max}
            autoFocus={autoFocus}
          />
          <Line style={{ height: lineHeight[size] }}>
            <Filler $color={color} value={ratio} />
          </Line>
          <Control $color={color} size={controlSize[size]} value={ratio} />
        </Container>
      )}
    />
  )
}
