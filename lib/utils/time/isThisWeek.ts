import { isInInterval } from '../interval/isInInterval'
import { startOfISOWeek, endOfISOWeek } from 'date-fns'

export const isThisWeek = (timestamp: number) => {
  const now = Date.now()
  const start = startOfISOWeek(now).getTime()
  const end = endOfISOWeek(now).getTime()

  return isInInterval({ start, end }, timestamp)
}
