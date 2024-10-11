import { haveSameContent } from '@lib/utils/array/haveSameContent'
import { DependencyList, useMemo } from 'react'

type Cache = {
  deps: DependencyList
  args: readonly any[]
  result: any
}

export const makeUseMemoCallback = () => {
  let cache: Cache | undefined = undefined

  const useMemoCallback = <T extends (...args: any[]) => any>(
    callback: T,
    deps: DependencyList,
  ): T => {
    return useMemo(() => {
      const memoizedCallback = (...args: any[]) => {
        if (
          cache &&
          haveSameContent(cache.args, args) &&
          haveSameContent(cache.deps, deps)
        ) {
          return cache.result
        }

        const result = callback(...args)

        cache = {
          deps,
          args,
          result,
        }

        return result
      }

      return memoizedCallback as T
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [deps])
  }

  return useMemoCallback
}
