import { getWeekday } from '@reactkit/utils/time/getWeekday'
import { MS_IN_MIN } from '@reactkit/utils/time'
import { useRhythmicRerender } from './useRhythmicRerender'

export const useWeekday = () => {
  useRhythmicRerender(MS_IN_MIN)

  return getWeekday(new Date())
}
