import { isEmpty } from '../array/isEmpty'

export const getLastItemOrder = (orders: number[]): number => {
  return isEmpty(orders) ? 0 : Math.max(...orders) + 1
}
