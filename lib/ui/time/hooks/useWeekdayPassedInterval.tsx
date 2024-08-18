import { Interval } from '@lib/utils/interval/Interval'
import { useRhythmicRerender } from '../../hooks/useRhythmicRerender'
import { useStartOfWeekday } from './useStartOfWeekday'
import { useWeekday } from '../../hooks/useWeekday'
import { endOfDay } from 'date-fns'

export const useWeekdayPassedInterval = (weekday: number): Interval => {
  const start = useStartOfWeekday(weekday)
  const currentWeekday = useWeekday()

  const now = useRhythmicRerender()

  if (start > now) {
    throw new Error('Weekday is in the future')
  }

  if (currentWeekday === weekday) {
    return {
      start,
      end: now,
    }
  }

  return {
    start: start,
    end: endOfDay(start).getTime(),
  }
}
