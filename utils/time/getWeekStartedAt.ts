import { startOfWeek } from 'date-fns'

export const getWeekStartedAt = (timestamp: number) =>
  startOfWeek(timestamp, { weekStartsOn: 1 }).getTime()
