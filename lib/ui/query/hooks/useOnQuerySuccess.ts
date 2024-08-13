import { useEffect } from 'react'
import { UseQueryResult } from '@tanstack/react-query'

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
