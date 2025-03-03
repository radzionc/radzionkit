import { authSessionWithEmail } from '../auth/resolvers/authSessionWithEmail'
import { authSessionWithOAuth } from '../auth/resolvers/authSessionWithOAuth'
import { sendAuthLinkByEmail } from '../auth/resolvers/sendAuthLinkByEmail'
import { updateUser } from '../users/resolvers/updateUser'
import { user } from '../users/resolvers/user'

import { ApiImplementation } from './ApiImplementation'

export const implementation: ApiImplementation = {
  authSessionWithEmail,
  authSessionWithOAuth,
  user,
  updateUser,
  sendAuthLinkByEmail,
}
