import { areSameDay } from './areSameDay'
import { getYesterday } from './getYesterday'

export const isYesterday = (date: Date) => {
  const yesterday = getYesterday()

  return areSameDay(date, yesterday)
}
