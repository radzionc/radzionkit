import { QueryKey, useMutation, useQueryClient } from '@tanstack/react-query'

export const useRefetchQueriesMutation = () => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: (queryKeys: QueryKey[]) => {
      return Promise.all(
        queryKeys.map((queryKey) => {
          return queryClient.invalidateQueries({ queryKey })
        }),
      )
    },
  })
}
