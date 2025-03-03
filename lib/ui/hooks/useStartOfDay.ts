import { MS_IN_MIN } from '@lib/utils/time'
import { startOfDay } from 'date-fns'

import { useRhythmicRerender } from './useRhythmicRerender'

export const useStartOfDay = () => {
  const now = useRhythmicRerender(MS_IN_MIN)

  return startOfDay(now).getTime()
}
