import { QueryKey, useQueryClient } from '@tanstack/react-query'
import { useCallback } from 'react'

export const useInvalidateQueries = () => {
  const queryClient = useQueryClient()

  return useCallback(
    (...queryKeys: QueryKey[]) => {
      queryKeys.forEach((queryKey) => {
        console.log('Invalidating query with key: ', queryKey)
        queryClient.invalidateQueries({ queryKey })
      })
    },
    [queryClient],
  )
}
