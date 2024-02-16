export const getRecordSize = (
  record: Record<string | number | symbol, unknown>,
) => {
  return Object.keys(record).length
}
