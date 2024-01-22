export const flatRecordsMerge = <T extends Record<string, any>>(
  ...records: T[]
): T => {
  const result: Record<string, any> = {}

  records.forEach((record) => {
    Object.keys(record).forEach((key) => {
      const value = record[key]
      if (Array.isArray(value)) {
        result[key] = [...(result[key] ?? []), ...value]
      } else if (typeof value === 'object') {
        result[key] = [...(result[key] ?? {}), ...value]
      } else {
        result[key] = value
      }
    })
  })

  return result as T
}
