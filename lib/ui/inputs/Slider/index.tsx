import { handleWithStopPropagation } from 'lib/shared/events'
import { useBoundingBox } from 'lib/shared/hooks/useBoundingBox'
import { toPercents } from 'lib/shared/utils/toPercents'
import { defaultTransition } from 'lib/ui/animations/transitions'
import { HSLA } from 'lib/ui/colors/HSLA'
import { centerContentCSS } from 'lib/ui/utils/centerContentCSS'
import { getCSSUnit } from 'lib/ui/utils/getCSSUnit'
import { getSameDimensionsCSS } from 'lib/ui/utils/getSameDimensionsCSS'
import { useEffect, useRef, useState } from 'react'
import styled, { useTheme } from 'styled-components'

import {
  InvisibleHTMLSlider,
  InvisibleHTMLSliderProps,
} from './InvisibleHtmlSlider'

type SliderSize = 'm' | 'l'

export interface SliderProps extends InvisibleHTMLSliderProps {
  size?: SliderSize
  color?: HSLA
  height?: React.CSSProperties['height']
}

const Control = styled.div<{ value: number; size: number; $color: HSLA }>`
  position: absolute;
  left: ${({ value, size }) =>
    `calc(${toPercents(value)} - ${getCSSUnit(size / 2)})`};
  ${({ size }) => getSameDimensionsCSS(size)};
  border-radius: 1000px;
  background: ${({ $color }) => $color.getVariant({ a: () => 1 }).toCssValue()};
  transition: outline ${defaultTransition};
  outline: 6px solid transparent;
`

const Container = styled.div<{ $color: HSLA }>`
  width: 100%;
  cursor: pointer;
  ${centerContentCSS};
  position: relative;

  --active-outline-color: ${({ $color }) =>
    $color.getVariant({ a: (a) => a * 0.2 }).toCssValue()};

  :focus-within ${Control} {
    outline: 12px solid var(--active-outline-color);
  }

  :hover ${Control} {
    outline-color: var(--active-outline-color);
  }
`

const Line = styled.div`
  width: 100%;

  overflow: hidden;
  background-color: ${({ theme }) => theme.colors.backgroundGlass.toCssValue()};
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
  const [container, setContainer] = useState<HTMLDivElement | null>(null)
  const box = useBoundingBox(container)
  const isActive = useRef(false)

  const handleMove = (clientX: number) => {
    if (!box || !isActive.current) return

    if (clientX < box.left || clientX > box.right) return

    const ratio = (clientX - box.x) / box.width

    const steps = Math.round((ratio * max) / step)
    const newValue = Math.max(min, steps * step)
    onChange(newValue)
  }

  useEffect(() => {
    const handleMouseUp = () => {
      isActive.current = false
    }
    window.addEventListener('mouseup', handleMouseUp)
    return () => {
      window.removeEventListener('mouseup', handleMouseUp)
    }
  })

  const ratio = value / max

  return (
    <Container
      style={{ height }}
      $color={color}
      ref={setContainer}
      onClick={handleWithStopPropagation()}
      onMouseDown={handleWithStopPropagation((event) => {
        isActive.current = true
        if (event) {
          handleMove(event.clientX)
        }
      })}
      onMouseMove={({ clientX }) => handleMove(clientX)}
    >
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
  )
}
