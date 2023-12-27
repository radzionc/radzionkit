export const normalize = (values: number[]): number[] => {
  const max = Math.max(...values)
  const min = Math.min(...values)
  const range = max - min
  return values.map((value) => (value - min) / range)
}
