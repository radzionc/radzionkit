export const mergeRecords = <K extends string, T>(
  ...records: Record<K, T>[]
): Record<K, T> =>
  records.reduce((acc, record) => ({ ...acc, ...record }), {} as Record<K, T>)
