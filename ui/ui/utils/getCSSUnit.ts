export const getCSSUnit = (value: number | string) =>
  typeof value === 'number' ? `${value}px` : value
