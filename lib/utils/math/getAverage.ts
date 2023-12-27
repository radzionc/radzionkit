import { sum } from '../array/sum'

export const getAverage = (values: number[]): number =>
  sum(values) / values.length
