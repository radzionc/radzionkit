import { useSprings } from '@react-spring/web'
import React from 'react'
import { useTheme } from 'styled-components'

import { Confetto } from './Confetto'
import { Point } from '../../../entities/Point'
import { randomInRange } from '../../../shared/utils/randomInRange'

interface ConfettiProps extends Point {
  count?: number
}

export const Confetti = React.memo(function Confetti({
  count = 50,
  x,
  y,
}: ConfettiProps) {
  const { colors } = useTheme()

  const [springs] = useSprings(count, () => ({
    from: {
      horizontal: randomInRange(-250, 250),
      opacity: 80,
      upwards: randomInRange(200, 700),
    },
    to: {
      horizontal: 0,
      opacity: 0,
      upwards: 0,
    },
  }))

  return (
    <>
      {springs.map((spring, index) => (
        <Confetto
          spring={spring}
          x={x}
          y={y}
          key={index}
          color={colors.getLabelColor(index)}
          rotate={randomInRange(0, 360)}
          size={randomInRange(8, 12)}
        />
      ))}
    </>
  )
})
