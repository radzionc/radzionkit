import { SpringValue, animated, to } from '@react-spring/web'

import styled from 'styled-components'
import { getRandomElement } from '@reactkit/utils/array/getRandomElement'
import { randomInRange } from '@reactkit/utils/randomInRange'
import { sameDimensions } from '../../css/sameDimensions'
import { Point } from '../../entities/Point'
import { HSLA } from '../../ui/colors/HSLA'

const Container = animated(styled.svg`
  ${sameDimensions(10)};
  pointer-events: none;
  position: absolute;
  will-change: transform;
`)

type ShapeProps = {
  color: string
  size: number
}

const Circle = ({ color, size }: ShapeProps) => (
  <circle
    cx={`${size / 2}`}
    cy={`${size / 2}`}
    r={`${(size / 2) * 0.6}`}
    fill={color}
  />
)

const Triangle = ({ color, size }: ShapeProps) => (
  <polygon
    points={`${size / 2},0 ${size},${randomInRange(0, size)} 0,${randomInRange(
      size / 2,
      size,
    )}`}
    fill={color}
  />
)

const Square = ({ color, size }: ShapeProps) => (
  <rect
    height={`${randomInRange(0, size / 2)}`}
    width={`${randomInRange(0, size)}`}
    fill={color}
  />
)

interface ConfettoProps extends Point {
  color: HSLA
  rotate: number
  size: number
  spring: {
    horizontal: SpringValue<number>
    opacity: SpringValue<number>
    upwards: SpringValue<number>
  }
}

export const Confetto = ({
  x,
  y,
  color,
  spring: { horizontal, upwards, opacity },
  rotate,
  size,
}: ConfettoProps) => {
  let totalUpwards = 0
  let totalHorizontal = 0
  const startTime = Date.now() / 1000
  let lastTime = startTime
  const gravityPerSecond = 30

  const Shape = getRandomElement([Circle, Square, Triangle])

  return (
    <Container
      style={{
        opacity,
        transform: to([upwards, horizontal], (v, h) => {
          const currentTime = Date.now() / 1000
          const duration = currentTime - lastTime
          const totalDuration = currentTime - startTime
          const verticalTraveled = v * duration
          const horizontalTraveled = h * duration
          totalUpwards += verticalTraveled
          totalHorizontal += horizontalTraveled
          lastTime = currentTime

          const totalGravity = gravityPerSecond * totalDuration
          const finalX = x + totalHorizontal
          const finalY = y - totalUpwards + totalGravity

          return `translate3d(${finalX}px, ${finalY}px, 0) rotate(${rotate}deg)`
        }),
      }}
    >
      <Shape color={color.toCssValue()} size={size} />
    </Container>
  )
}
