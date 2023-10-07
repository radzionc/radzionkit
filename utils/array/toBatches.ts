import { range } from './range'

export const toBatches = <T>(array: T[], batchSize: number): T[][] => {
  const batchesCount = Math.ceil(array.length / batchSize)

  return range(batchesCount).map((batchIndex) => {
    const startIndex = batchIndex * batchSize
    const endIndex = startIndex + batchSize
    return array.slice(startIndex, endIndex)
  })
}
