import { Interval } from './Interval'

export const isInInterval = (interval: Interval, value: number) =>
  interval.start <= value && value <= interval.end
