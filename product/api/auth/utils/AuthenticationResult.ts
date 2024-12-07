import { User } from '@product/entities/User'

export type AuthenticationResult = Pick<User, 'email' | 'name'>
