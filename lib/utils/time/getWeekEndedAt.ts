import { endOfWeek } from 'date-fns'

export const getWeekEndedAt = (timestamp: number) =>
  endOfWeek(timestamp, { weekStartsOn: 1 }).getTime()
