import { addDays } from 'date-fns'
import { isInInterval } from '../interval/isInInterval'
import { getWeekEndedAt } from './getWeekEndedAt'
import { getWeekStartedAt } from './getWeekStartedAt'

export const isNextWeek = (timestamp: number) => {
  const now = Date.now()
  const start = addDays(getWeekStartedAt(now), 7).getTime()
  const end = addDays(getWeekEndedAt(now), 7).getTime()

  return isInInterval({ start, end }, timestamp)
}
