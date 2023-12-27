export const intersection = <T>(...arrays: T[][]): T[] => {
  return arrays.reduce((acc, arr) => {
    return acc.filter((v) => arr.includes(v))
  })
}
