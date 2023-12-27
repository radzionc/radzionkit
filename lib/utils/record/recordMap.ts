export const recordMap = <T>(
  record: Record<string, T>,
  fn: (value: T) => T,
) => {
  return Object.fromEntries(
    Object.entries(record).map(([key, value]) => [key, fn(value)]),
  )
}
