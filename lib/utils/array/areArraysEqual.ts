export const areArraysEqual = <T>(
  one: T[],
  another: T[],
  compare: (one: T, another: T) => boolean = (one, another) => one === another,
): boolean => {
  if (one.length !== another.length) {
    return false
  }

  return one.every((value, index) => compare(value, another[index]))
}
