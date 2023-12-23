import { useStartOfDay } from '@radzionkit/ui/hooks/useStartOfDay'
import { useWeekday } from './useWeekday'
import { convertDuration } from '@radzionkit/utils/time/convertDuration'

export const useStartOfWeek = () => {
  const startOfDay = useStartOfDay()
  const weekday = useWeekday()

  return startOfDay - convertDuration(weekday, 'd', 'ms')
}
