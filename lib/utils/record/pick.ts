export function pick<T, K extends keyof T>(
  obj: T,
  keys: readonly K[],
): Pick<T, K> {
  const result = {} as Pick<T, K>

  keys.forEach((k) => {
    result[k] = obj[k]
  })

  return result
}
