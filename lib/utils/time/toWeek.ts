import { getYear, startOfWeek } from 'date-fns'
import { getWeekIndex } from './getWeekIndex'

export const toWeek = (timestamp: number) => {
  const date = startOfWeek(new Date(timestamp), { weekStartsOn: 1 })

  return {
    year: getYear(date),
    week: getWeekIndex(date.getTime()),
  }
}
