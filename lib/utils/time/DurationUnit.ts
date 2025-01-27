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

export const shortDurationUnitName = {
  ms: 'ms',
  s: 'sec',
  min: 'min',
  h: 'hr',
  d: 'd',
  w: 'w',
  ns: 'ns',
}
