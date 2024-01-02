export const durationUnits = ['ns', 'ms', 's', 'min', 'h', 'd', 'w'] as const
export type DurationUnit = (typeof durationUnits)[number]

export const durationUnitName = {
  ms: 'millisecond',
  s: 'second',
  min: 'minute',
  h: 'hour',
  d: 'day',
  w: 'week',
  ns: 'nanosecond',
}
