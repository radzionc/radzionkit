import { range } from '../array/range'

import { Interval } from './Interval'

export const intervalRange = ({ start, end }: Interval): number[] =>
  range(end - start + 1).map((value) => value + start)
