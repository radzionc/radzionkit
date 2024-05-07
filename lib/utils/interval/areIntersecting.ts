import { Interval } from '@lib/utils/interval/Interval'

export const areIntersecting = (one: Interval, another: Interval) =>
  (one.end > another.start && one.start < another.end) ||
  (another.end > one.start && another.start < one.end)
