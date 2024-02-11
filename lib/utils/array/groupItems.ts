export const groupItems = <T, K extends string | number>(
  items: T[],
  getKey: (item: T) => K,
): Record<K, T[]> => {
  const result = {} as Record<K, T[]>

  items.forEach((item) => {
    const key = getKey(item)
    if (!result[key]) {
      result[key] = []
    }
    result[key]?.push(item)
  })

  return result
}
