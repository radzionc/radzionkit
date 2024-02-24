import { useEffect, useRef } from 'react'
import { UseQueryResult } from '@tanstack/react-query'

export const useOnQueryFirstSuccess = <T>(
  { data }: Pick<UseQueryResult<T>, 'data'>,
  onSuccess?: (data: T) => void,
) => {
  const hasNotified = useRef(false)
  useEffect(() => {
    if (onSuccess && data && !hasNotified.current) {
      onSuccess(data)
      hasNotified.current = true
    }
  }, [data, onSuccess])
}
