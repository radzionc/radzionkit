import { UseQueryResult } from '@tanstack/react-query'
import { useEffect } from 'react'

type PollParams<T> = {
  delay: number
  shouldStop: (result: T) => boolean
}

export const usePoll = <T>(
  { data, refetch, dataUpdatedAt }: UseQueryResult<T>,
  { delay, shouldStop }: PollParams<T>,
) => {
  useEffect(() => {
    if (data === undefined || shouldStop(data)) return

    const msSinceLastUpdate = Date.now() - dataUpdatedAt

    const intervalId = setTimeout(
      () => {
        refetch()
      },
      Math.max(0, delay - msSinceLastUpdate),
    )

    return () => {
      clearTimeout(intervalId)
    }
  }, [data, dataUpdatedAt, delay, refetch, shouldStop])
}
