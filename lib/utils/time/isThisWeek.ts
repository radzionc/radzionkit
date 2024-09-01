import { isInInterval } from '../interval/isInInterval'
import { getWeekInterval } from './Week'

export const isThisWeek = (timestamp: number) => {
  const interval = getWeekInterval(Date.now())

  return isInInterval(interval, timestamp)
}
