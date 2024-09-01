import { addWeeks } from 'date-fns'
import { isInInterval } from '../interval/isInInterval'
import { getWeekInterval } from './Week'

export const isNextWeek = (timestamp: number) => {
  const now = Date.now()
  const interval = getWeekInterval(addWeeks(now, 1).getTime())

  return isInInterval(interval, timestamp)
}
