import { haveEqualFields } from '../record/haveEqualFields'
import { format, getYear, setWeek, setYear } from 'date-fns'
import { getWeekIndex } from './getWeekIndex'
import { getWeekStartedAt } from './getWeekStartedAt'
import { convertDuration } from './convertDuration'

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
  date = setWeek(date, week + 1)
  date = setYear(date, year)

  return getWeekStartedAt(date.getTime())
}

export const weekToString = ({ year, week }: Week): string =>
  [week, year].join('-')

export const stringToWeek = (str: string): Week => {
  const [week, year] = str.split('-').map(Number)

  return { week, year }
}

export const formatWeek = (timestamp: number): string => {
  const startedAt = getWeekStartedAt(timestamp)
  return `${format(startedAt, 'd MMM')} - ${format(
    startedAt + convertDuration(6, 'd', 'ms'),
    'd MMM',
  )}`
}
