export const haveSameContent = <T>(
  one: readonly T[],
  another: readonly T[],
): boolean => {
  if (one.length !== another.length) {
    return false
  }

  return one.every((item, index) => item === another[index])
}
