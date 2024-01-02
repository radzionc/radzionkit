import {
  MS_IN_DAY,
  MS_IN_HOUR,
  MS_IN_MIN,
  MS_IN_SEC,
  MS_IN_WEEK,
  NS_IN_MS,
} from '.'
import { DurationUnit } from './DurationUnit'

const msInUnit: Record<DurationUnit, number> = {
  ns: 1 / NS_IN_MS,
  ms: 1,
  s: MS_IN_SEC,
  min: MS_IN_MIN,
  h: MS_IN_HOUR,
  d: MS_IN_DAY,
  w: MS_IN_WEEK,
}

export const convertDuration = (
  value: number,
  from: DurationUnit,
  to: DurationUnit,
) => {
  const result = value * (msInUnit[from] / msInUnit[to])

  return result
}
