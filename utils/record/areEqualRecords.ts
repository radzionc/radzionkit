export const areEqualRecords = <T extends Record<string, any>>(
  ...records: T[]
): boolean => {
  const [first, ...rest] = records
  const keys = Object.keys(first)

  return rest.every((record) => {
    if (Object.keys(record).length !== keys.length) {
      return false
    }

    return keys.every((key) => {
      return first[key] === record[key]
    })
  })
}
