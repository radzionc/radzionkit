export const cumulativeSum = (numbers: number[]): number[] =>
  numbers.reduce((acc, value) => {
    const previous = acc[acc.length - 1] || 0
    return [...acc, previous + value]
  }, [] as number[])
