import { S_IN_HOUR, S_IN_MIN } from '.'
import { padWithZero } from '../padWithZero'

export const formatDurationAsADigitalClock = (totalSeconds: number) => {
  const hours = Math.floor(totalSeconds / S_IN_HOUR)
  const minutes = Math.floor((totalSeconds - hours * S_IN_HOUR) / S_IN_MIN)
  const seconds = Math.floor(
    totalSeconds - hours * S_IN_HOUR - minutes * S_IN_MIN,
  )

  const parts: string[] = []
  if (hours) {
    parts.push(padWithZero(hours))
  }

  parts.push(padWithZero(minutes))
  parts.push(padWithZero(seconds))

  return parts.join(':')
}
