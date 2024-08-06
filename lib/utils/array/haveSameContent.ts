export const haveSameContent = <T>(one: T[], another: T[]): boolean => {
  if (one.length !== another.length) {
    return false
  }

  return one.every((item, index) => item === another[index])
}
