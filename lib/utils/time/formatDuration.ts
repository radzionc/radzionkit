import { padWithZero } from '../padWithZero'
import { H_IN_DAY, MIN_IN_HOUR, S_IN_HOUR, S_IN_MIN } from '.'
import { DurationUnit, convertDuration } from './convertDuration'

interface FormatDurationOptions {
  maxUnit?: 'd' | 'h'
}

export const formatDuration = (
  duration: number,
  unit: DurationUnit,
  options: FormatDurationOptions = {},
) => {
  const maxUnit = options.maxUnit || 'd'
  const minutes = Math.round(convertDuration(duration, unit, 'min'))

  if (minutes < MIN_IN_HOUR) return `${minutes}m`

  const hours = Math.floor(minutes / S_IN_MIN)

  if (hours < H_IN_DAY || maxUnit === 'h') {
    const minutesPart = Math.round(minutes % S_IN_MIN)
    if (!minutesPart) {
      return `${hours}h`
    }
    return `${hours}h ${minutesPart}m`
  }

  const days = Math.floor(hours / H_IN_DAY)
  const hoursPart = Math.round(hours % H_IN_DAY)
  if (!hoursPart) {
    return `${days}d`
  }

  return `${days}d ${hoursPart}h`
}

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
