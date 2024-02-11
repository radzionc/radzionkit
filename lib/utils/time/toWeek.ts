import { getYear } from 'date-fns'
import { getWeekIndex } from './getWeekIndex'
import { getWeekStartedAt } from './getWeekStartedAt'

export const toWeek = (timestamp: number) => {
  const weekStartedAt = getWeekStartedAt(timestamp)

  return {
    year: getYear(new Date(weekStartedAt)),
    week: getWeekIndex(weekStartedAt),
  }
}
