export function pickValues<T, K extends keyof T>(
  obj: T,
  keys: readonly K[],
): T[K][] {
  const result: T[K][] = []

  keys.forEach((k) => {
    result.push(obj[k])
  })

  return result
}
