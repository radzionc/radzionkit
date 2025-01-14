import { shouldBePresent } from '../assert/shouldBePresent'

export function assertField<T extends object, K extends PropertyKey>(
  obj: T,
  key: K,
): NonNullable<Extract<T, Record<K, any>>[K]> {
  if (!(key in obj)) {
    throw new Error(`Missing field '${String(key)}' in the object.`)
  }

  return shouldBePresent((obj as any)[key])
}
