import { degreesToRadians } from '@reactkit/utils/degreesToRadians'
import { Point } from '../../entities/Point'

export const getPointOnCircle = (
  radius: number,
  cutoutRadius: number,
  angleInDegrees: number,
): Point => {
  const angleInRadians = degreesToRadians(angleInDegrees - 90)
  return {
    x: radius + cutoutRadius * Math.cos(angleInRadians),
    y: radius + cutoutRadius * Math.sin(angleInRadians),
  }
}
