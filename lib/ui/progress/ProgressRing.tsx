import React, { SVGProps } from 'react'
import styled from 'styled-components'

import { ColorProp, ValueProp, SizeProp } from '../props'
import { getColor } from '../theme/getters'

type ProgressRingProps = ValueProp<number> &
  ColorProp &
  SizeProp & {
    thickness: number
  } & Omit<SVGProps<SVGSVGElement>, 'color'>

const Track = styled.circle`
  stroke: ${getColor('mistExtra')};
`

export const ProgressRing: React.FC<ProgressRingProps> = ({
  size,
  thickness,
  value,
  color,
  ...rest
}) => {
  const clampedValue = Math.min(value, 1)
  const center = size / 2
  const radius = (size - thickness) / 2
  const circumference = 2 * Math.PI * radius
  const progressOffset = circumference - clampedValue * circumference

  return (
    <svg width={size} height={size} {...rest}>
      <Track
        cx={center}
        cy={center}
        r={radius}
        strokeWidth={thickness}
        fill="none"
      />
      <circle
        cx={center}
        cy={center}
        r={radius}
        stroke={color.toCssValue()}
        strokeWidth={thickness}
        fill="none"
        strokeDasharray={circumference}
        strokeDashoffset={progressOffset}
        strokeLinecap="round"
        transform={`rotate(-90 ${center} ${center})`}
      />
    </svg>
  )
}
