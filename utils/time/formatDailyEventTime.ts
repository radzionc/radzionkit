import { padWithZero } from '../padWithZero'
import { convertDuration } from './convertDuration'
import { Minutes } from './types'

export const formatDailyEventTime = (value: Minutes) => {
  const hours = Math.floor(convertDuration(value, 'min', 'h'))
  const minutes = Math.round(value - convertDuration(hours, 'h', 'min'))

  return `${padWithZero(hours)}:${padWithZero(minutes)}`
}
