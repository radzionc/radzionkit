import { InfiniteData } from '@tanstack/react-query'
import { useMemo } from 'react'

export function usePaginatedResultItems<T, V>(
  data: InfiniteData<T | undefined> | undefined,
  getPageItems: (page: T) => V[],
): V[] {
  return useMemo(() => {
    const items: V[] = []

    data?.pages?.forEach((page) => {
      if (page) {
        items.push(...getPageItems(page))
      }
    })

    return items
  }, [data?.pages, getPageItems])
}
