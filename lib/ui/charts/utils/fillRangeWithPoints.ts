import { range } from '@lib/utils/array/range'
import { order } from '@lib/utils/array/order'
import { getLastItem } from '@lib/utils/array/getLastItem'

type Input = {
  steps: number[]
  length: number
  maxPoints: number
}

export const fillRangeWithPoints = ({
  steps,
  length,
  maxPoints,
}: Input): number[] => {
  const options = order(
    steps.filter((size) => length % size === 0),
    (v) => v,
    'asc',
  )

  const minStep = length / (maxPoints - 1)

  const step =
    options.find((option) => option >= minStep) || getLastItem(options)

  if (!step) {
    return []
  }

  const labelsCount = length / step + 1

  return range(labelsCount).map((index) => index * step)
}
