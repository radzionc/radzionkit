export const recordMap = <K extends string | number, T, V>(
  record: Record<K, T>,
  fn: (value: T, key: K) => V,
): Record<K, V> => {
  return Object.fromEntries(
    Object.entries(record).map(([key, value]) => [
      key,
      fn(value as T, key as K),
    ]),
  ) as Record<K, V>
}
