export const recordMap = <K extends string | number, T, V>(
  record: Record<K, T>,
  fn: (value: T) => V,
): Record<K, V> => {
  return Object.fromEntries(
    Object.entries(record).map(([key, value]) => [key, fn(value as T)]),
  ) as Record<K, V>
}
