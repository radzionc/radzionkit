export const normalizeDataArrays = <T extends Record<string, number[]>>(
  input: T,
): T => {
  const values = Object.values(input).flat()
  const max = Math.max(...values)
  const min = Math.min(...values)
  const range = max - min
  return Object.fromEntries(
    Object.entries(input).map(([key, value]) => [
      key,
      value.map((v) => (v - min) / range),
    ]),
  ) as T
}
