import { OAuthProvider } from '@demo/entities/OAuthProvider'
import { AuthSession } from '@demo/entities/AuthSession'
import { Subscription } from '@demo/entities/Subscription'
import { User } from '@demo/entities/User'
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
  manageSubscription: ApiMethod<
    undefined,
    {
      updateUrl: string
      cancelUrl: string
    }
  >

  subscription: ApiMethod<{ id: string }, Subscription | undefined>

  sendAuthLinkByEmail: ApiMethod<{ email: string }, undefined>
}

export type ApiMethodName = keyof ApiInterface
