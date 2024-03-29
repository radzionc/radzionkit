import { haveEqualFields } from '../record/haveEqualFields'
import { getYear, setWeek, setYear } from 'date-fns'
import { getWeekIndex } from './getWeekIndex'
import { getWeekStartedAt } from './getWeekStartedAt'

export type Week = {
  year: number
  // week index starts from 0
  week: number
}

export const areSameWeek = <T extends Week>(a: T, b: T): boolean =>
  haveEqualFields(['year', 'week'], a, b)

export const toWeek = (timestamp: number): Week => {
  const weekStartedAt = getWeekStartedAt(timestamp)

  return {
    year: getYear(new Date(weekStartedAt)),
    week: getWeekIndex(weekStartedAt),
  }
}

export const fromWeek = ({ year, week }: Week): number => {
  let date = new Date(year, 0, 1)
  date = setWeek(date, week)
  date = setYear(date, year)

  return getWeekStartedAt(date.getTime())
}
