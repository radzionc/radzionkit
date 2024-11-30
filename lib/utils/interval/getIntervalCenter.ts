import { Interval } from './Interval'

export const getIntervalCenter = ({ start, end }: Interval): number =>
  (start + end) / 2
