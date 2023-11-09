import { FieldError } from 'react-hook-form'

export const toFieldError = (
  message: string | undefined,
): FieldError | undefined => {
  if (message) {
    return {
      type: 'custom',
      message,
    }
  }
}
