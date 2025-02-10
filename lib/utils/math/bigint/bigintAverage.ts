import { bigintSum } from './bigintSum'

export const bigintAverage = (numbers: bigint[]): bigint =>
  bigintSum(numbers) / BigInt(numbers.length)
