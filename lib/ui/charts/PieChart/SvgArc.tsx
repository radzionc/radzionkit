import { degreesToRadians } from '@lib/utils/degreesToRadians'

import { HSLA } from '../../colors/HSLA'

interface Props {
  color: HSLA
  startAngle: number
  endAngle: number
  radius: number
  cutoutRadius: number
}

export const polarToCartesian = (
  radius: number,
  cutoutRadius: number,
  angleInDegrees: number,
) => {
  const angleInRadians = degreesToRadians(angleInDegrees - 90)
  return {
    x: radius + cutoutRadius * Math.cos(angleInRadians),
    y: radius + cutoutRadius * Math.sin(angleInRadians),
  }
}

const getArcPath = (
  radius: number,
  cutoutRadius: number,
  startAngle: number,
  endAngle: number,
) => {
  const start = polarToCartesian(radius, radius, endAngle)
  const end = polarToCartesian(radius, radius, startAngle)
  const largeArcFlag = endAngle - startAngle <= 180 ? 0 : 1

  const start2 = polarToCartesian(radius, cutoutRadius, endAngle)
  const end2 = polarToCartesian(radius, cutoutRadius, startAngle)

  return [
    'M',
    start.x,
    start.y,
    'A',
    radius,
    radius,
    0,
    largeArcFlag,
    0,
    end.x,
    end.y,
    'L',
    radius,
    radius,
    'Z',

    'M',
    start2.x,
    start2.y,
    'A',
    cutoutRadius,
    cutoutRadius,
    0,
    largeArcFlag,
    0,
    end2.x,
    end2.y,
    'L',
    radius,
    radius,
    'Z',
  ].join(' ')
}

export const SvgArc = ({
  color,
  startAngle,
  endAngle,
  radius,
  cutoutRadius,
}: Props) => {
  if (endAngle - startAngle >= 360) {
    const largeArcFlag = 0
    const outerStart = polarToCartesian(radius, radius, 0)
    const outerMid = polarToCartesian(radius, radius, 180)
    const outerEnd = polarToCartesian(radius, radius, 360)
    const innerStart = polarToCartesian(radius, cutoutRadius, 0)
    const innerMid = polarToCartesian(radius, cutoutRadius, 180)
    const innerEnd = polarToCartesian(radius, cutoutRadius, 360)

    const path = [
      'M',
      outerStart.x,
      outerStart.y,
      'A',
      radius,
      radius,
      0,
      largeArcFlag,
      1,
      outerMid.x,
      outerMid.y,
      'A',
      radius,
      radius,
      0,
      largeArcFlag,
      1,
      outerEnd.x,
      outerEnd.y,
      'L',
      innerEnd.x,
      innerEnd.y,
      'A',
      cutoutRadius,
      cutoutRadius,
      0,
      largeArcFlag,
      0,
      innerMid.x,
      innerMid.y,
      'A',
      cutoutRadius,
      cutoutRadius,
      0,
      largeArcFlag,
      0,
      innerStart.x,
      innerStart.y,
      'Z',
    ].join(' ')

    return <path fill={color.toCssValue()} d={path} />
  }

  const path = getArcPath(radius, cutoutRadius, startAngle, endAngle)

  return <path fillRule="evenodd" fill={color.toCssValue()} d={path} />
}
