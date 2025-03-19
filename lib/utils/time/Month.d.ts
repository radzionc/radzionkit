import { Interval } from '../interval/Interval'
export type Month = {
  year: number
  month: number
}
export declare const areSameMonth: <T extends Month>(a: T, b: T) => boolean
export declare const toMonth: (timestamp: number) => Month
export declare const fromMonth: ({ year, month }: Month) => number
export declare const monthToString: ({ year, month }: Month) => string
export declare const stringToMonth: (str: string) => Month
export declare const shortMonthsNames: string[]
export declare const monthNames: string[]
export declare const getMonthInterval: (month: Month) => Interval
export declare const addMonths: (
  { year, month }: Month,
  monthsToAdd: number,
) => Month
export declare const subtractMonths: (
  { year, month }: Month,
  monthsToSubtract: number,
) => Month
