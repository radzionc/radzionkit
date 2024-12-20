import { assertUserId } from '../../auth/assertUserId'
import { getUser } from '@product/db/user'
import { ApiResolver } from '../../resolvers/ApiResolver'

export const user: ApiResolver<'user'> = async ({ context }) => {
  const userId = assertUserId(context)

  return getUser(userId)
}
