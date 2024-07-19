import { range } from '@lib/utils/array/range'
import { order } from '@lib/utils/array/order'

type Input = {
  stepSizes: number[]
  maxValue: number
  minLabelCount?: number
}

export const generateYLabels = ({
  stepSizes,
  maxValue,
  minLabelCount = 4,
}: Input): number[] => {
  const minStep = maxValue / minLabelCount
  const ascendingStepSizes = order(stepSizes, (v) => v, 'asc')
  const step =
    ascendingStepSizes.find((size) => size > minStep) || ascendingStepSizes[0]
  const labelsCount = Math.ceil(maxValue / step) + 1

  return range(labelsCount).map((i) => i * step)
}
