import { match } from '../match'

type RightAngleTriangleSide = 'adjacent' | 'opposite'

type CalculateRightAngleTriangleSideInput = {
  givenSideLength: number
  angleInRadians: number
  knownSide: RightAngleTriangleSide
}

export const calculateRightAngleTriangleSide = ({
  givenSideLength,
  angleInRadians,
  knownSide,
}: CalculateRightAngleTriangleSideInput): number =>
  match(knownSide, {
    adjacent: () => givenSideLength * Math.tan(angleInRadians),
    opposite: () => givenSideLength / Math.tan(angleInRadians),
  })
