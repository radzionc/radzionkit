import { getMonth, getYear, startOfMonth } from 'date-fns'
import { Month } from './Month'

export const toMonth = (timestamp: number): Month => {
  const date = startOfMonth(new Date(timestamp))

  return {
    year: getYear(date),
    month: getMonth(date) + 1,
  }
}

export const fromMonth = ({ year, month }: Month): number => {
  const date = new Date(year, month - 1, 1)

  return startOfMonth(date).getTime()
}
