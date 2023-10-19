export const executeIfDefined = <T>(
  value: T | undefined,
  handler: (value: T) => Promise<void>,
) => {
  if (value) {
    return handler(value)
  }
}
