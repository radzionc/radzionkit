import { range } from './range'

export const toPairs = <T>(arr: T[]): [T, T][] => {
  if (arr.length % 2 !== 0) {
    throw new Error('Array length must be even')
  }

  return range(arr.length / 2).map((i) => [arr[i * 2], arr[i * 2 + 1]])
}
