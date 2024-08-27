import { addDays } from 'date-fns'
import { isInInterval } from '../interval/isInInterval'
import { startOfISOWeek, endOfISOWeek } from 'date-fns'

export const isNextWeek = (timestamp: number) => {
  const now = Date.now()
  const start = addDays(startOfISOWeek(now), 7).getTime()
  const end = addDays(endOfISOWeek(now), 7).getTime()

  return isInInterval({ start, end }, timestamp)
}
