export const mirrorRecord = <
  K extends string | number,
  V extends string | number,
>(
  record: Record<K, V>,
): Record<V, K> => {
  const result = {} as Record<V, K>
  for (const key in record) {
    result[record[key]] = key
  }

  return result
}
