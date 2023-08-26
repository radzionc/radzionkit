export const getNewOrder = (
  orders: number[],
  sourceIndex: number,
  destinationIndex: number,
): number => {
  const sourceOrder = orders[sourceIndex]
  if (orders.length === 1) {
    return sourceOrder
  }

  if (destinationIndex === 0) {
    return orders[0] - 1
  }

  if (destinationIndex === orders.length - 1) {
    return orders[destinationIndex] + 1
  }

  if (destinationIndex < sourceIndex) {
    return (
      orders[destinationIndex - 1] +
      (orders[destinationIndex] - orders[destinationIndex - 1]) / 2
    )
  }

  return (
    orders[destinationIndex] +
    (orders[destinationIndex + 1] - orders[destinationIndex]) / 2
  )
}
