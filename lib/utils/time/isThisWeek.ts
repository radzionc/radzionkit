import { isInInterval } from '../interval/isInInterval'
import { getWeekEndedAt } from './getWeekEndedAt'
import { getWeekStartedAt } from './getWeekStartedAt'

export const isThisWeek = (timestamp: number) => {
  const now = Date.now()
  const start = getWeekStartedAt(now)
  const end = getWeekEndedAt(now)

  return isInInterval({ start, end }, timestamp)
}
