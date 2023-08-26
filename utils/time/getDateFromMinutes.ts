import { MIN_IN_HOUR } from '.'

export const getDateFromMinutes = (value: number) => {
  const hours = Math.floor(value / MIN_IN_HOUR)
  const minutes = value - hours * MIN_IN_HOUR

  const date = new Date()
  date.setHours(hours)
  date.setMinutes(minutes)

  return date
}
