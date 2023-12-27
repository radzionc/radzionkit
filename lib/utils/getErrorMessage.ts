export const getErrorMessage = (err: unknown): string => {
  if (err instanceof Error) {
    return err.message
  }

  return JSON.stringify(err)
}
