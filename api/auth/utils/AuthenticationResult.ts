import { User } from '@radzionkit/entities/User'

export type AuthenticationResult = Pick<User, 'email' | 'name'>
