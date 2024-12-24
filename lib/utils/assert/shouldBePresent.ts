export function shouldBePresent<T>(
  value: T,
  valueName: string = 'value',
): NonNullable<T> {
  if (value === undefined || value === null) {
    throw new Error(`${valueName} is required`)
  }

  return value
}
