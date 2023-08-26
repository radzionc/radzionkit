export const randomInRange = (min: number, max: number): number =>
  Math.random() * (max - min) + min

export const randomIntegerInRange = (min: number, max: number): number =>
  Math.round(randomInRange(min, max))
