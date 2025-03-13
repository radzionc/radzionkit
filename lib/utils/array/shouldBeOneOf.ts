import { isOneOf } from './isOneOf'

export const shouldBeOneOf = <T>(item: any, items: readonly T[]): T => {
  if (!isOneOf(item, items)) {
    throw new Error(`${item} is not one of ${items}`)
  }

  return item
}
