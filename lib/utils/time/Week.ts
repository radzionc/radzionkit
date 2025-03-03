import {
  endOfISOWeek,
  format,
  setWeek,
  setYear,
  startOfISOWeek,
  getISOWeek,
  getISOWeekYear,
} from 'date-fns'

import { Interval } from '../interval/Interval'
import { haveEqualFields } from '../record/haveEqualFields'

import { convertDuration } from './convertDuration'

export type Week = {
  year: number
  // week index starts from 0
  week: number
}

export const areSameWeek = <T extends Week>(a: T, b: T): boolean =>
  haveEqualFields(['year', 'week'], a, b)

export const toWeek = (timestamp: number): Week => {
  const date = new Date(timestamp)
  return {
    year: getISOWeekYear(date),
    week: getISOWeek(date) - 1,
  }
}

export const fromWeek = ({ year, week }: Week): number => {
  let date = new Date(year, 0, 1)
  date = setWeek(date, week + 1)
  date = setYear(date, year)

  return startOfISOWeek(date).getTime()
}

export const weekToString = ({ year, week }: Week): string =>
  [week, year].join('-')

export const stringToWeek = (str: string): Week => {
  const [week, year] = str.split('-').map(Number)

  return { week, year }
}

export const formatWeek = (timestamp: number): string => {
  const startedAt = startOfISOWeek(timestamp).getTime()
  return `${format(startedAt, 'd MMM')} - ${format(
    startedAt + convertDuration(6, 'd', 'ms'),
    'd MMM',
  )}`
}

export const getWeekInterval = (timestamp: number): Interval => {
  return {
    start: startOfISOWeek(timestamp).getTime(),
    end: endOfISOWeek(timestamp).getTime(),
  }
}
