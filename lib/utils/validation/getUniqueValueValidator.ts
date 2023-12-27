import { Validator } from './Validator'

export const getUniqueValueValidator =
  <T>(values: Set<T>, name = 'value'): Validator<T> =>
  (value) => {
    if (values.has(value)) {
      return `A ${name} with this value already exists`
    }
  }
