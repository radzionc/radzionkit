export const isOneOf = <T>(item: any, items: readonly T[]): T | undefined => {
  if (items.includes(item)) {
    return item
  }
}
