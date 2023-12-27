import { getWeek, getYear, startOfWeek } from 'date-fns'

export const toWeek = (timestamp: number) => {
  const date = startOfWeek(new Date(timestamp), { weekStartsOn: 1 })

  return {
    year: getYear(date),
    week: getWeek(date),
  }
}
