import { getValueProviderSetup } from '../state/getValueProviderSetup'
import {
  CountryFlagFallback,
  CountryFlagFallbackProps,
} from './CountryFlagFallback'

const {
  useValue: useCountryFlagFallbackProps,
  provider: CountryFlagFallbackPropsProvider,
} = getValueProviderSetup<CountryFlagFallbackProps>('CountryFlagFallbackProps')

export const CountryFlagDynamicFallback = () => {
  const props = useCountryFlagFallbackProps()

  return <CountryFlagFallback {...props} />
}

export { CountryFlagFallbackPropsProvider }
