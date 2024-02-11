type FilterFnInput<T> = {
  key: keyof T
  value: T
}

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
