import { convertDuration } from '@lib/utils/time/convertDuration'
import { useStartOfWeek } from '../../hooks/useStartOfWeek'

export const useStartOfWeekday = (weekday: number) => {
  const weekStartedAt = useStartOfWeek()

  return weekStartedAt + convertDuration(weekday, 'd', 'ms')
}
