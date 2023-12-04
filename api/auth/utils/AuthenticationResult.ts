import { User } from '@reactkit/entities/User'

export type AuthenticationResult = Pick<User, 'email' | 'name'>
