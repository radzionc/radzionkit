export function getLastItem<T>(array: readonly T[]): T {
  return array[array.length - 1]
}
