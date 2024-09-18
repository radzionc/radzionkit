import { getLastItem } from '../array/getLastItem'
import { isEmpty } from '../array/isEmpty'
import { defaultOrder, orderIncrementStep } from './config'

type GetNewOrderInput = {
  orders: number[]
  sourceIndex: number | null
  destinationIndex: number
}

export const getNewOrder = ({
  orders,
  sourceIndex,
  destinationIndex,
}: GetNewOrderInput): number => {
  if (isEmpty(orders)) {
    return defaultOrder
  }

  if (destinationIndex === 0) {
    return orders[0] - orderIncrementStep
  }

  const movedUp = sourceIndex !== null && sourceIndex < destinationIndex
  const previousIndex = movedUp
    ? destinationIndex
    : destinationIndex - orderIncrementStep
  const previous = orders[previousIndex]

  const shouldBeLast =
    (destinationIndex === orders.length - orderIncrementStep &&
      sourceIndex !== null) ||
    destinationIndex > orders.length - orderIncrementStep

  if (shouldBeLast) {
    return getLastItem(orders) + orderIncrementStep
  }

  const nextIndex = movedUp
    ? destinationIndex + orderIncrementStep
    : destinationIndex
  const next = orders[nextIndex]

  return previous + (next - previous) / 2
}
