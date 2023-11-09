import { FieldError } from 'react-hook-form'
import { toFieldError } from './toFieldError'
import { Validators } from './Validators'

export const validate = <T>(
  values: T,
  validators: Partial<Validators<T>>,
): Partial<Record<keyof T, FieldError>> => {
  const result: Partial<Record<keyof T, FieldError>> = {}

  Object.keys(validators).forEach((key) => {
    const fieldKey = key as unknown as keyof T
    const validator = validators[fieldKey]
    if (validator) {
      const value = values[fieldKey]
      const message = validator(value)
      if (message) {
        result[fieldKey] = toFieldError(message)
      }
    }
  })

  return result
}
