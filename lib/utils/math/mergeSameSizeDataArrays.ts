export const mergeSameSizeDataArrays = (arrays: number[][]): number[] => {
  const result = new Array(arrays[0].length).fill(0)
  arrays.forEach((array) => {
    array.forEach((value, index) => {
      result[index] += value
    })
  })
  return result
}
