export function areEqualArrays<T>(a: T[], b: T[]) {
  if (a.length !== b.length) return false

  return a.every((value, index) => value === b[index])
}