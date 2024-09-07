import { isRecordEmpty } from './isRecordEmpty'

export const correctRecordFields = <T>(
  value: T,
  correctors: Array<(item: T) => Partial<T> | undefined>,
): Partial<T> | undefined => {
  const result = correctors.reduce((acc, correct) => {
    const changes = correct({ ...value, ...acc })
    if (changes && !isRecordEmpty(changes)) {
      return { ...acc, ...changes }
    }

    return acc
  }, {} as Partial<T>)

  return isRecordEmpty(result) ? undefined : result
}
