import { pluralize } from './pluralize'
import { MS_IN_MIN, S_IN_MIN } from './time'

type DurationUnit = 'ms' | 'min' | 's'

const unitsInMinute: Record<DurationUnit, number> = {
  ms: MS_IN_MIN,
  min: 1,
  s: S_IN_MIN,
}

export const formatDuration = (duration: number, unit: DurationUnit) => {
  const minutes = Math.round(duration / unitsInMinute[unit])

  if (minutes < S_IN_MIN) return `${minutes} min`

  const hours = Math.floor(minutes / S_IN_MIN)
  const minutesPart = Math.round(minutes % S_IN_MIN)
  if (!minutesPart) {
    return pluralize(hours, 'hour')
  }
  return `${hours} h ${minutesPart} m`
}
