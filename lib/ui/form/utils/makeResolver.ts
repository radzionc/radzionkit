import { FieldValues, Resolver } from 'react-hook-form'
import { validate } from './validate'
import { Validators } from './Validators'

export function makeResolver<T extends FieldValues>(
  validators: Validators<T>,
): Resolver<T> {
  return (values) => {
    return {
      values,
      errors: validate(values, validators),
    }
  }
}
