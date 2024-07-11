export const dayInputParts = ['day', 'month', 'year'] as const
export type DayInputPart = (typeof dayInputParts)[number]

export type DayInputParts = Record<DayInputPart, number>

export const toDayInputParts = (timestamp: number): DayInputParts => {
  const date = new Date(timestamp)
  return {
    day: date.getDate(),
    month: date.getMonth() + 1,
    year: date.getFullYear(),
  }
}

export const fromDayInputParts = ({
  day,
  month,
  year,
}: DayInputParts): number => new Date(year, month - 1, day).getTime()
