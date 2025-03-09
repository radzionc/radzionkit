import { withoutDuplicates } from './withoutDuplicates'

export const difference = <T>(...arrays: T[][]): T[] => {
  if (arrays.length === 0) return []
  if (arrays.length === 1) return arrays[0]

  const allItems = arrays.flat()

  return withoutDuplicates(allItems).filter(
    (item) => arrays.filter((arr) => arr.includes(item)).length === 1,
  )
}
