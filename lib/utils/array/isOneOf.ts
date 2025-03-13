export function isOneOf<T>(item: unknown, items: readonly T[]): item is T {
  return items.includes(item as T)
}
