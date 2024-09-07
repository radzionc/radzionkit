import { toEntries } from './toEntries'

type Input<K extends string, T extends Record<K, any>> = {
  before: T
  after: T
  // comparators?: Partial<Record<K, (before: T[K], after: T[K]) => boolean>>
  comparators?: Partial<{
    [Key in K]: (before: T[Key], after: T[Key]) => boolean
  }>
}

const defaultComparator = <T>(a: T, b: T) => a === b

export const getUpdatedValues = <K extends string, T extends Record<K, any>>({
  before,
  after,
  comparators = {},
}: Input<K, T>): Partial<T> => {
  const result: Partial<T> = {}

  toEntries(before).forEach(({ key, value: valueBefore }) => {
    const areEqual = comparators[key] || defaultComparator
    const valueAfter = after[key]

    if (!areEqual(valueBefore, valueAfter)) {
      result[key] = valueAfter
    }
  })

  return result
}
