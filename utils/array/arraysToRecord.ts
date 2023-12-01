export const arraysToRecord = <T extends string | number | symbol, U>(
  keys: readonly T[],
  values: U[],
): Record<T, U> => {
  return keys.reduce(
    (acc, key, index) => {
      acc[key] = values[index]
      return acc
    },
    {} as Record<T, U>,
  )
}
