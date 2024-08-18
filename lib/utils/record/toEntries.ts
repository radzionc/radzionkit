import { Entry } from '../entities/Entry'

export const toEntries = <K extends string, T>(
  record: Record<K, T>,
): Entry<K, T>[] =>
  Object.entries(record).map(([key, value]) => ({
    key: key as K,
    value: value as T,
  }))
