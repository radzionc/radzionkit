import { haveEqualFields } from '../record/haveEqualFields'
import { convertDuration } from './convertDuration'
import { addDays, format, startOfYear } from 'date-fns'
import { inTimeZone } from './inTimeZone'

export type Day = {
  year: number
  dayIndex: number
}

export const toDay = (timestamp: number): Day => {
  const date = new Date(timestamp)
  const dateOffset = date.getTimezoneOffset()
  const yearStartedAt = inTimeZone(startOfYear(timestamp).getTime(), dateOffset)
  const diff = timestamp - yearStartedAt
  const diffInDays = diff / convertDuration(1, 'd', 'ms')

  const day = {
    year: new Date(timestamp).getFullYear(),
    dayIndex: Math.floor(diffInDays),
  }

  return day
}

export const dayToString = ({ year, dayIndex }: Day): string =>
  [dayIndex, year].join('-')

export const stringToDay = (str: string): Day => {
  const [dayIndex, year] = str.split('-').map(Number)

  return { dayIndex, year }
}

export const fromDay = ({ year, dayIndex }: Day): number => {
  const startOfYearDate = startOfYear(new Date(year, 0, 1))

  return addDays(startOfYearDate, dayIndex).getTime()
}

export const areSameDay = <T extends Day>(a: T, b: T): boolean =>
  haveEqualFields(['year', 'dayIndex'], a, b)

export const formatDay = (timestamp: number) => format(timestamp, 'EEEE, d MMM')
