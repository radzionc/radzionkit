export const toRecordTypeBody = (record: Record<string, string>) =>
  `{
    ${Object.entries(record)
      .map(([key, value]) => `${key}: ${value}`)
      .join('\n')}
  }`
