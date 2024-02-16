export const getRecordKeys = <K extends string | number>(
  record: Record<K, unknown>,
): K[] => {
  return Object.keys(record) as K[]
}
