import { useStartOfDay } from '@reactkit/ui/hooks/useStartOfDay'
import { useWeekday } from './useWeekday'
import { convertDuration } from '@reactkit/utils/time/convertDuration'

export const useStartOfWeek = () => {
  const startOfDay = useStartOfDay()
  const weekday = useWeekday()

  return startOfDay - convertDuration(weekday, 'd', 'ms')
}
