import { getPointOnCircle } from '../../shared/utils/getPointOnCircle'
import { HSLA } from '../colors/HSLA'

interface Props {
  color: HSLA
  startAngle: number
  endAngle: number
  radius: number
  cutoutRadius: number
}

const getArcPath = (
  radius: number,
  cutoutRadius: number,
  startAngle: number,
  endAngle: number,
) => {
  const start = getPointOnCircle(radius, radius, endAngle)
  const end = getPointOnCircle(radius, radius, startAngle)
  const largeArcFlag = endAngle - startAngle <= 180 ? 0 : 1

  const start2 = getPointOnCircle(radius, cutoutRadius, endAngle)
  const end2 = getPointOnCircle(radius, cutoutRadius, startAngle)

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
  const path = getArcPath(radius, cutoutRadius, startAngle, endAngle)

  return <path fillRule="evenodd" fill={color.toCssValue()} d={path} />
}
