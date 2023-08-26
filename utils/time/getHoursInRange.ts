import { startOfHour } from 'date-fns'
import { MS_IN_HOUR } from '.'

export const getHoursInRange = (start: number, end: number) => {
  const recursive = (time: number): number[] => {
    if (time > end) {
      return []
    }

    const nextHour = time + MS_IN_HOUR
    if (time < start) {
      return recursive(nextHour)
    }

    return [time, ...recursive(nextHour)]
  }

  return recursive(startOfHour(start).getTime())
}
