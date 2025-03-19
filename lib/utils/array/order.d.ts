import { Order } from '../order/Order'
export declare const order: <T>(
  array: readonly T[],
  getValue: (item: T) => number,
  order: Order,
) => T[]
