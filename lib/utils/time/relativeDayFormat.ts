import { isYesterday, isToday, isTomorrow, format } from 'date-fns'

export const relativeDayFormat = (
  timestamp: number,
  formatStr: string = 'd MMM',
): string => {
  if (isToday(timestamp)) {
    return 'Today'
  }

  if (isYesterday(timestamp)) {
    return 'Yesterday'
  }

  if (isTomorrow(timestamp)) {
    return 'Tomorrow'
  }

  return format(timestamp, formatStr)
}
