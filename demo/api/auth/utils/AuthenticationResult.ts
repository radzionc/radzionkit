import { User } from '@demo/entities/User'

export type AuthenticationResult = Pick<User, 'email' | 'name'>
