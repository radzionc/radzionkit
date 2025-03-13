import { attempt } from '@lib/utils/attempt'
import { getErrorMessage } from '@lib/utils/getErrorMessage'

import { ValidationResult } from './ValidationResult'
import { Validators } from './Validators'

export const validate = <T>(
  values: T,
  validators: Partial<Validators<T>>,
): ValidationResult<T> => {
  const result: ValidationResult<T> = {}

  Object.keys(validators).forEach((key) => {
    const fieldKey = key as unknown as keyof T
    const validator = validators[fieldKey]
    if (validator) {
      const value = values[fieldKey]

      const { data, error } = attempt(() => validator(value, values))
      const message = error ? getErrorMessage(error) : data
      if (message) {
        result[fieldKey] = message
      }
    }
  })

  return result
}
