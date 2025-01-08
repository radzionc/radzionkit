import { shouldBePresent } from '../assert/shouldBePresent'

export function assertField<
  T extends { [key: string]: any },
  K extends keyof T,
>(obj: T, key: K): NonNullable<T[K]> {
  if (!(key in obj)) {
    throw new Error(`Missing field '${String(key)}' in the object.`)
  }

  return shouldBePresent(obj[key]) as NonNullable<T[K]>
}
