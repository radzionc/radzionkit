export const getClosestItemIndex = (dataPointsNumber: number, value: number) =>
  Math.round(value * (dataPointsNumber - 1))
