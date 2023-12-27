export const isRecordEmpty = <T extends Record<string, unknown>>(record: T) =>
  Object.keys(record).length === 0
