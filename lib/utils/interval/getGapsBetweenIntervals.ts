import { Interval } from './Interval'

export const getGapsBetweenIntervals = (intervals: Interval[]): Interval[] => {
  if (intervals.length === 0) {
    return []
  }

  const sortedIntervals = [...intervals].sort((a, b) => a.start - b.start)

  const gaps = sortedIntervals.reduce<Interval[]>(
    (acc, current, index, array) => {
      if (index === 0) {
        return acc
      }

      const prev = array[index - 1]

      if (prev.end < current.start) {
        acc.push({
          start: prev.end,
          end: current.start,
        })
      }

      return acc
    },
    [],
  )

  return gaps
}
