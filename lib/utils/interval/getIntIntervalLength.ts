import { getIntervalDuration } from './getIntervalDuration'
import { Interval } from './Interval'

export const getIntIntervalLength = (interval: Interval) =>
  getIntervalDuration(interval) + 1
