import { useCallback } from 'react'
import { QueryKey, useQueryClient } from 'react-query'

export const useInvalidateQueries = () => {
  const queryClient = useQueryClient()

  return useCallback(
    (...queryKeys: QueryKey[]) => {
      queryKeys.forEach((key) => {
        console.log('Invalidating query with key: ', key)
        queryClient.invalidateQueries(key)
      })
    },
    [queryClient],
  )
}
