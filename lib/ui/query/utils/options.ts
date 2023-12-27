import { convertDuration } from '@lib/utils/time/convertDuration'

export const rarelyChangingQueryOptions = {
  refetchOnMount: false,
  refetchOnWindowFocus: false,
  refetchOnReconnect: false,
  cacheTime: convertDuration(1, 'd', 'ms'),
}
