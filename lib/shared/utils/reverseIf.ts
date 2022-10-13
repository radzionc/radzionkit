export function reverseIf<T>(array: T[], condition: boolean): T[] {
  return condition ? array.slice().reverse() : array
}
