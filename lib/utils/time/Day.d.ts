export type Day = {
  year: number
  dayIndex: number
}
export declare const toDay: (timestamp: number) => Day
export declare const dayToString: ({ year, dayIndex }: Day) => string
export declare const stringToDay: (str: string) => Day
export declare const fromDay: ({ year, dayIndex }: Day) => number
export declare const areSameDay: <T extends Day>(a: T, b: T) => boolean
export declare const formatDay: (timestamp: number) => string
