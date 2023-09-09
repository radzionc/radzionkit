import { MS_IN_DAY, MS_IN_HOUR, MS_IN_MIN, MS_IN_SEC } from '.'

export type DurationUnit = 'ms' | 's' | 'min' | 'h' | 'd'

const msInUnit: Record<DurationUnit, number> = {
  ms: 1,
  s: MS_IN_SEC,
  min: MS_IN_MIN,
  h: MS_IN_HOUR,
  d: MS_IN_DAY,
}

export const convertDuration = (
  value: number,
  from: DurationUnit,
  to: DurationUnit,
) => {
  const result = value * (msInUnit[from] / msInUnit[to])

  return result
}
