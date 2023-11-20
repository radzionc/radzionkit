import { shuffle } from './shuffle'

export const sampleArray = <T>(items: T[], sampleSize: number): T[] => {
  if (sampleSize > items.length) {
    throw new Error('Sample size cannot be larger than array length')
  }

  const shuffledItems = shuffle(items)
  return shuffledItems.slice(0, sampleSize)
}
