export const without = <T>(items: readonly T[], ...itemsToRemove: T[]) =>
  items.filter((item) => !itemsToRemove.includes(item))
