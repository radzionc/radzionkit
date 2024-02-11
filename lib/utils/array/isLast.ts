export function isLast<T>(items: readonly T[], index: number): boolean {
  return index === items.length - 1
}
