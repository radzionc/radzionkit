export const couldBeTooManyRequestsError = (err: unknown): boolean => {
  return JSON.stringify(err).includes('429')
}
