import { startOfDay } from 'date-fns'
import { useRhythmicRerender } from './useRhythmicRerender'
import { MS_IN_MIN } from '@lib/utils/time'

export const useStartOfDay = () => {
  const now = useRhythmicRerender(MS_IN_MIN)

  return startOfDay(now).getTime()
}
