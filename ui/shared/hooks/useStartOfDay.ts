import { millisecondsInMinute, startOfDay } from 'date-fns'
import { useRhythmicRerender } from 'ui/hooks/useRhythmicRerender'

export const useStartOfDay = () => {
  useRhythmicRerender(millisecondsInMinute)

  return startOfDay(new Date()).getTime()
}
