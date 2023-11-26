export const omit = <T extends Record<string, any>, K extends keyof T>(
  record: T,
  ...keys: K[]
): Omit<T, K> => {
  const result = { ...record }

  for (const key of keys) {
    delete result[key]
  }

  return result
}
