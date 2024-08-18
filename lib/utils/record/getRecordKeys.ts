export const getRecordKeys = <K extends string | number, I>(
  record: Record<K, I[]>,
): K[] => {
  return Object.keys(record) as K[]
}
