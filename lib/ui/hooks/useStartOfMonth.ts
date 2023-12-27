import { startOfMonth } from 'date-fns'

const getStartOfMonth = () => startOfMonth(new Date()).getTime()

export const useStartOfMonth = () => {
  return getStartOfMonth()
}
