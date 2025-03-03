import { isEmpty } from '../array/isEmpty'

import { defaultOrder, orderIncrementStep } from './config'

export const getLastItemOrder = (orders: number[]): number => {
  return isEmpty(orders)
    ? defaultOrder
    : Math.max(...orders) + orderIncrementStep
}
