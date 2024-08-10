import { Entry } from '../entities/Entry'

type FilterFnInput<T> = Entry<keyof T, T>

export const recordFilter = <T>(
  record: Record<string, T>,
  fn: (input: FilterFnInput<T>) => boolean,
) => {
  return Object.fromEntries(
    Object.entries(record).filter(([key, value]) =>
      fn({ key: key as keyof T, value }),
    ),
  )
}
