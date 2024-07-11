import { convertDuration } from './convertDuration'

export const inTimeZone = (timestamp: number, targetTimeZoneOffset: number) => {
  const offsetAtTimestamp = new Date(timestamp).getTimezoneOffset()
  const offsetDiff = targetTimeZoneOffset - offsetAtTimestamp
  return timestamp + convertDuration(offsetDiff, 'min', 'ms')
}
