import { getErrorMessage } from '@lib/utils/getErrorMessage'
import { Validators } from './Validators'
import { ValidationResult } from './ValidationResult'

export const validate = <T>(
  values: T,
  validators: Partial<Validators<T>>,
): ValidationResult<T> => {
  const result: ValidationResult<T> = {}

  Object.keys(validators).forEach((key) => {
    const fieldKey = key as unknown as keyof T
    const validator = validators[fieldKey]
    if (validator) {
      try {
        const value = values[fieldKey]
        const message = validator(value, values)
        if (message !== undefined) {
          result[fieldKey] = message
        }
      } catch (err) {
        result[fieldKey] = getErrorMessage(err)
      }
    }
  })

  return result
}
