import { Interval } from '@lib/utils/interval/Interval'
import { useRhythmicRerender } from '../../hooks/useRhythmicRerender'
import { useStartOfWeekday } from './useStartOfWeekday'

export const useWeekdayPassedInterval = (weekday: number): Interval => {
  const start = useStartOfWeekday(weekday)

  const now = useRhythmicRerender()

  if (start > now) {
    throw new Error('Weekday is in the future')
  }

  return {
    start,
    end: now,
  }
}
