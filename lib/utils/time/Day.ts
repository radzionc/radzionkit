import { haveEqualFields } from '../record/haveEqualFields'
import { convertDuration } from './convertDuration'
import { startOfYear } from 'date-fns'

export type Day = {
  year: number
  dayIndex: number
}

export const toDay = (timestamp: number): Day => {
  const yearStartedAt = startOfYear(timestamp).getTime()
  const diff = timestamp - yearStartedAt

  return {
    year: new Date(timestamp).getFullYear(),
    dayIndex: Math.floor(diff / convertDuration(1, 'd', 'ms')),
  }
}

export const fromDay = ({ year, dayIndex }: Day): number => {
  const yearStartedAt = startOfYear(new Date(year, 0, 1)).getTime()
  return yearStartedAt + dayIndex * convertDuration(1, 'd', 'ms')
}

export const areSameDay = <T extends Day>(a: T, b: T): boolean =>
  haveEqualFields(['year', 'dayIndex'], a, b)
