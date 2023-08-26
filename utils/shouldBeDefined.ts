export function shouldBeDefined<T>(
  value: T | undefined,
  valueName: string = 'value',
): T {
  if (value === undefined) {
    throw new Error(`${valueName} is undefined`)
  }

  return value
}
