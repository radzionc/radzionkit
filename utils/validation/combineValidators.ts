import { Validator } from './Validator'

export const combineValidators =
  <T>(...validators: Validator<T>[]): Validator<T> =>
  (value) => {
    for (const validate of validators) {
      const error = validate(value)
      if (error) return error
    }
  }
