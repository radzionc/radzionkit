export const recordMap = <T, V>(
  record: Record<string, T>,
  fn: (value: T) => V,
): Record<string, V> => {
  return Object.fromEntries(
    Object.entries(record).map(([key, value]) => [key, fn(value)]),
  )
}
