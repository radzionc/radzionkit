export const bigintSum = (numbers: bigint[]) =>
  numbers.reduce((acc, value) => acc + value, BigInt(0))
