import { convertDuration } from './time/convertDuration'

type Cache<T> = {
  data: T
  updatedAt: number
}

interface MemoizeAsyncOptions {
  cacheTime?: number
}

export const memoizeAsync = <T extends (...args: any[]) => Promise<any>>(
  func: T,
  options: MemoizeAsyncOptions = {},
): T => {
  const cache = new Map<string, Cache<ReturnType<T>>>()
  const cacheTime = options.cacheTime ?? convertDuration(1, 'h', 'ms')

  const memoizedFunc = async (...args: Parameters<T>) => {
    const key = JSON.stringify(args)

    const cachedResult = cache.get(key)

    if (!cachedResult || cachedResult.updatedAt < Date.now() - cacheTime) {
      const result = await func(...args)
      cache.set(key, {
        data: result,
        updatedAt: Date.now(),
      })

      return result
    }

    return cachedResult.data
  }

  return memoizedFunc as T
}
