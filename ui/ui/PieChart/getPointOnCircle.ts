import { Point } from '@reactkit/ui/entities/Point'
import { degreesToRadians } from '@reactkit/utils/degreesToRadians'

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
