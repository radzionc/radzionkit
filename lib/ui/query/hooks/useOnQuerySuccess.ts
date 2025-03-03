import { UseQueryResult } from '@tanstack/react-query'
import { useEffect } from 'react'

export const useOnQuerySuccess = <T>(
  { data }: Pick<UseQueryResult<T>, 'data'>,
  onSuccess: (data: T) => void,
) => {
  useEffect(() => {
    if (data) {
      onSuccess(data)
    }
  }, [data, onSuccess])
}
