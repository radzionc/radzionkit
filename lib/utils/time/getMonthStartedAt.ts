import { startOfMonth } from 'date-fns'

export const getMonthStartedAt = (timestamp: number) =>
  startOfMonth(timestamp).getTime()
