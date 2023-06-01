export function assertDefined<T>(
  value: T | undefined | null,
  name = 'value'
): T {
  if (value === undefined || value === null) {
    throw new Error(`${name} is ${value}`)
  }

  return value
}
