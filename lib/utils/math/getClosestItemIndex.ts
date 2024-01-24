export const getClosestItemIndex = (data: number[], value: number) =>
  Math.round(value * (data.length - 1))
