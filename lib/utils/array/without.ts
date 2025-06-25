export function without<T>(
  items: readonly (T | undefined)[],
  ...itemsToRemove: readonly [undefined]
): T[]

export function without<T>(
  items: readonly (T | null)[],
  ...itemsToRemove: readonly [null]
): T[]

export function without<T>(
  items: readonly (T | null | undefined)[],
  ...itemsToRemove: readonly [null, undefined] | readonly [undefined, null]
): T[]

export function without<T>(items: readonly T[], ...itemsToRemove: T[]): T[]

export function without<T>(items: readonly T[], ...itemsToRemove: T[]) {
  return items.filter((item) => !itemsToRemove.includes(item))
}
