export function assertDefined<T>(
  value: T | undefined | null,
  valueName: string = 'value',
): T {
  if (value === undefined || value === null) {
    throw new Error(`${valueName} is undefined`)
  }

  return value
}
