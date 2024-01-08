import { getWeek } from 'date-fns'

export const getWeekIndex = (timestamp: number) =>
  getWeek(timestamp, { weekStartsOn: 1 }) - 1
