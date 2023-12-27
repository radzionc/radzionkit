export const toSizeUnit = (value: number | string) =>
  typeof value === 'number' ? `${value}px` : value
