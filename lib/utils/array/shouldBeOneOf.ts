import { isOneOf } from './isOneOf'

export const shouldBeOneOf = <T>(item: any, items: readonly T[]): T => {
  const typedItem = isOneOf(item, items)
  if (!typedItem) {
    throw new Error(`${item} is not one of ${items}`)
  }

  return typedItem
}
