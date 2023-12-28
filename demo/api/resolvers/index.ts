import { ApiImplementation } from './ApiImplementation'
import { authSessionWithEmail } from '../auth/resolvers/authSessionWithEmail'
import { authSessionWithOAuth } from '../auth/resolvers/authSessionWithOAuth'
import { user } from '../users/resolvers/user'
import { updateUser } from '../users/resolvers/updateUser'
import { sendAuthLinkByEmail } from '../auth/resolvers/sendAuthLinkByEmail'

export const implementation: ApiImplementation = {
  authSessionWithEmail,
  authSessionWithOAuth,
  user,
  updateUser,
  sendAuthLinkByEmail,
}
