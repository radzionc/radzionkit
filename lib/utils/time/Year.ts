import { haveEqualFields } from '../record/haveEqualFields'
import { startOfYear } from 'date-fns'

export type Year = {
  year: number
}

export const areSameYear = <T extends Year>(a: T, b: T): boolean =>
  haveEqualFields(['year'], a, b)

export const toYear = (timestamp: number): Year => {
  const year = new Date(timestamp).getFullYear()

  return {
    year,
  }
}

export const fromYear = ({ year }: Year): number => {
  const date = new Date(year, 0, 1)

  return startOfYear(date).getTime()
}

export const yearToString = ({ year }: Year): string => year.toString()

export const stringToYear = (str: string): Year => ({
  year: Number(str),
})
