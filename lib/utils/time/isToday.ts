import { areSameDay } from './areSameDay'

export const isToday = (date: Date) => {
  return areSameDay(date, new Date())
}
