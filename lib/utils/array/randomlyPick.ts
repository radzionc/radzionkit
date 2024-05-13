import { randomIntegerInRange } from '../randomInRange'

export const randomlyPick = <T>(array: T[]): T => {
  return array[randomIntegerInRange(0, array.length - 1)]
}
