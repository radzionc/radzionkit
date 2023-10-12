export type Order = 'asc' | 'desc'

export const order = <T>(
  array: T[],
  getValue: (item: T) => number,
  order: Order,
) => {
  return array.sort((a, b) => {
    if (order === 'asc') {
      return getValue(a) - getValue(b)
    } else {
      return getValue(b) - getValue(a)
    }
  })
}
