import { useStartOfDay } from './useStartOfDay'
import { useWeekday } from './useWeekday'
import { convertDuration } from '@lib/utils/time/convertDuration'

export const useStartOfWeek = () => {
  const startOfDay = useStartOfDay()
  const weekday = useWeekday()

  return startOfDay - convertDuration(weekday, 'd', 'ms')
}
