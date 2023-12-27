import { CountryCode } from '@lib/countries'

export interface User {
  id: string
  email: string
  name?: string
  country?: CountryCode
  updatedAt: number
  createdAt: number
}
