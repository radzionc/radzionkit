import { match } from '@lib/utils/match'

export type JustifyPoints = 'space-between' | 'space-around'

type Input = {
  justifyPoints: JustifyPoints
  dataSize: number
  containerWidth: number
  index: number
}

export const positionDataPoint = ({
  justifyPoints,
  dataSize,
  containerWidth,
  index,
}: Input) =>
  match(justifyPoints, {
    'space-between': () => index * (containerWidth / (dataSize - 1)),
    'space-around': () => {
      const halfStep = containerWidth / dataSize / 2
      return index * halfStep * 2 + halfStep
    },
  })
