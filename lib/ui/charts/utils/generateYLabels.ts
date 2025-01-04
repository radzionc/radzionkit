import { range } from '@lib/utils/array/range'

type Input = {
  data: number[]
  minLabels?: number
  maxLabels?: number
}

const PREFERRED_STEPS = [1, 2, 2.5, 5, 10] as const

const getMagnitude = (value: number): number => {
  if (value === 0) return 1
  return Math.pow(10, Math.floor(Math.log10(Math.abs(value))))
}

const getBoundaryValue = (
  value: number,
  step: number,
  roundUp: boolean,
): number => {
  return (roundUp ? Math.ceil(value / step) : Math.floor(value / step)) * step
}

const getStepSizes = (approximateStep: number): number[] => {
  const magnitude = getMagnitude(approximateStep)
  return PREFERRED_STEPS.map((step) => step * magnitude)
}

const findBestStep = (
  dataRange: number,
  stepSizes: number[],
  minLabels: number,
  maxLabels: number,
): number => {
  if (dataRange === 0) {
    return stepSizes[0]
  }

  for (const step of stepSizes) {
    const labelCount = Math.floor(dataRange / step) + 1
    if (labelCount >= minLabels && labelCount <= maxLabels) {
      return step
    }
  }
  return stepSizes[0]
}

export const generateYLabels = ({
  data,
  minLabels = 4,
  maxLabels = 6,
}: Input): number[] => {
  if (data.length === 0) {
    return []
  }

  const maxValue = Math.max(...data)
  const minValue = Math.min(...data)
  const dataRange = maxValue - minValue

  if (dataRange === 0) {
    const magnitude = getMagnitude(Math.abs(maxValue))
    const step = magnitude / 2
    const base = getBoundaryValue(maxValue, step, false)
    return range(5).map((i) => Number((base + (i - 2) * step).toFixed(2)))
  }

  const approximateStep = dataRange / (maxLabels - 1)
  const stepSizes = getStepSizes(approximateStep)
  const bestStep = findBestStep(dataRange, stepSizes, minLabels, maxLabels)

  const lowerBound = getBoundaryValue(minValue, bestStep, false)
  const upperBound = getBoundaryValue(maxValue, bestStep, true)
  const labelCount = Math.floor((upperBound - lowerBound) / bestStep) + 1

  return range(labelCount).map((i) =>
    Number((lowerBound + i * bestStep).toFixed(2)),
  )
}
