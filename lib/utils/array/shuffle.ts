import { range } from './range'

export const shuffle = <T>(items: T[]): T[] => {
  const indexes = range(items.length)
  const randomOrder = indexes.map(() => Math.random())
  return indexes
    .sort((a, b) => randomOrder[a] - randomOrder[b])
    .map((i) => items[i])
}
