import { assertUserId } from '../../auth/assertUserId'
import { getUser } from '@radzionkit/db/user'
import { ApiResolver } from '../../resolvers/ApiResolver'

export const user: ApiResolver<'user'> = async ({ context }) => {
  const userId = assertUserId(context)

  return getUser(userId)
}
