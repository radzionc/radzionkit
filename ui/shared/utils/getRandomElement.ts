import { randomIntegerInRange } from './randomInRange'

export function getRandomElement<T>(array: T[]): T {
  return array[randomIntegerInRange(0, array.length - 1)]
}
