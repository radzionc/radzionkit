import { CountryCode } from '@radzionkit/utils/countries'

export interface ApiResolverContext {
  country?: CountryCode
  userId?: string
}
