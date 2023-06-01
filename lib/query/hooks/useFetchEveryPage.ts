import { useEffect } from 'react'

interface Params {
  fetchNextPage: () => void
  hasNextPage?: boolean
  isFetchingNextPage: boolean
}

export const useFetchEveryPage = ({
  fetchNextPage,
  hasNextPage,
  isFetchingNextPage,
}: Params) => {
  return useEffect(() => {
    if (hasNextPage && !isFetchingNextPage) {
      fetchNextPage()
    }
  }, [fetchNextPage, hasNextPage, isFetchingNextPage])
}
