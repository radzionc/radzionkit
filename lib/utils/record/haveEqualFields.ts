export const haveEqualFields = <T extends Record<string, any>>(
  fields: string[],
  ...records: T[]
) =>
  records.every((record) =>
    fields.every((field) => record[field] === records[0][field]),
  )
