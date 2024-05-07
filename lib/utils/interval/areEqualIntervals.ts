import { haveEqualFields } from '../record/haveEqualFields'
import { Interval } from './Interval'

export const areEqualIntervals = (a: Interval, b: Interval) =>
  haveEqualFields(['start', 'end'], a, b)
