import { OAuthProvider } from '@product/entities/OAuthProvider'
import { AuthSession } from '@product/entities/AuthSession'
import { User } from '@product/entities/User'
import { ApiMethod } from './ApiMethod'

export interface ApiInterface {
  authSessionWithEmail: ApiMethod<
    {
      code: string
      timeZone: number
    },
    AuthSession
  >

  authSessionWithOAuth: ApiMethod<
    {
      provider: OAuthProvider
      code: string
      redirectUri: string
      timeZone: number
    },
    AuthSession
  >

  user: ApiMethod<{ timeZone: number }, User>
  updateUser: ApiMethod<Partial<Pick<User, 'name' | 'country'>>, undefined>

  sendAuthLinkByEmail: ApiMethod<{ email: string }, undefined>
}

export type ApiMethodName = keyof ApiInterface