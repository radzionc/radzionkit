import { Entry } from '../entities/Entry'

export const toEntries = <T>(record: Record<string, T>): Entry<string, T>[] => {
  return Object.entries(record).map(([key, value]) => ({ key, value }))
}
