import { isEmpty } from '../array/isEmpty'

export const defaultOrder = 0

export const getLastItemOrder = (orders: number[]): number => {
  return isEmpty(orders) ? defaultOrder : Math.max(...orders) + 1
}
