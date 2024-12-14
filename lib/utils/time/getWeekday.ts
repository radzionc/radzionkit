import { D_IN_WEEK } from '.'

export const getWeekday = (value: number) => {
  return (new Date(value).getDay() + 6) % D_IN_WEEK
}
