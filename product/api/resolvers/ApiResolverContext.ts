import { CountryCode } from '@lib/countries'

export interface ApiResolverContext {
  country?: CountryCode
  userId?: string
}
