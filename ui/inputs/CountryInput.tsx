import { CountryCode } from '@reactkit/utils/countries'
import { ComponentWithErrorProps, InputProps } from '../props'

interface CountryInputProps
  extends InputProps<CountryCode | undefined>,
    ComponentWithErrorProps {}

export const CountryInput = ({ value, onChange, error }: CountryInputProps) => {
  console.log(value, onChange, error)
  return null
}
