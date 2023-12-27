import { getCurrentTimezoneOffset } from './getCurrentTimezoneOffset'
import { convertDuration } from './convertDuration'

export const inTimeZone = (timestamp: number, targetTimeZoneOffset: number) => {
  const offsetDiff = targetTimeZoneOffset - getCurrentTimezoneOffset()
  return timestamp + convertDuration(offsetDiff, 'min', 'ms')
}
