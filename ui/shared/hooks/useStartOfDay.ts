import { startOfDay } from 'date-fns'
import { useRhythmicRerender } from '../../ui/hooks/useRhythmicRerender'
import { MS_IN_MIN } from '@reactkit/utils/time'

export const useStartOfDay = () => {
  useRhythmicRerender(MS_IN_MIN)

  return startOfDay(new Date()).getTime()
}
