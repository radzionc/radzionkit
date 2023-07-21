export const memoize = <T extends (...args: any[]) => any>(
  func: T,
  getKey?: (...args: any[]) => string
): T => {
  const cache = new Map<string, ReturnType<T>>()

  const memoizedFunc = (...args: Parameters<T>) => {
    const key = getKey ? getKey(...args) : JSON.stringify(args)

    const cachedResult = cache.get(key)

    if (!cachedResult) {
      const result = func(...args)
      cache.set(key, result)

      return result
    }

    return cachedResult
  }

  return memoizedFunc as T
}
