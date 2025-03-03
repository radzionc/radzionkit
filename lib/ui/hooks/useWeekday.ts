import { MS_IN_MIN } from '@lib/utils/time'
import { getWeekday } from '@lib/utils/time/getWeekday'

import { useRhythmicRerender } from './useRhythmicRerender'

export const useWeekday = () => {
  useRhythmicRerender(MS_IN_MIN)

  return getWeekday(Date.now())
}
