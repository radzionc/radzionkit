import { haveEqualFields } from '../record/haveEqualFields'
import { convertDuration } from './convertDuration'
import { format, startOfYear } from 'date-fns'
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

  const day = {
    year: new Date(timestamp).getFullYear(),
    dayIndex: Math.floor(diff / convertDuration(1, 'd', 'ms')),
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
  const yearStartedAt = startOfYear(new Date(year, 0, 1)).getTime()
  return yearStartedAt + dayIndex * convertDuration(1, 'd', 'ms')
}

export const areSameDay = <T extends Day>(a: T, b: T): boolean =>
  haveEqualFields(['year', 'dayIndex'], a, b)

export const formatDay = (timestamp: number) => format(timestamp, 'EEEE, d MMM')
