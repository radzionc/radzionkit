export const getUpdatedValues = <T extends Record<string, any>>(
  original: T,
  updated: T,
): Partial<T> => {
  const result: Partial<T> = {}

  for (const key in original) {
    if (original[key] !== updated[key]) {
      result[key] = updated[key]
    }
  }

  return result
}
