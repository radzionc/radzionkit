import { useRouter } from 'next/router'
import { useEffect } from 'react'

type QueryParamsHandler<T> = (params: T) => void

export const useHandleQueryParams = <T>(handler: QueryParamsHandler<T>) => {
  const { isReady, query } = useRouter()

  useEffect(() => {
    if (!isReady) return

    handler(query as unknown as T)
  }, [isReady, query, handler])
}
