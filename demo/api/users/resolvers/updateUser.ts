import { assertUserId } from '../../auth/assertUserId'
import * as usersDb from '@demo/db/user'
import { ApiResolver } from '../../resolvers/ApiResolver'

export const updateUser: ApiResolver<'updateUser'> = async ({
  input,
  context,
}) => {
  const userId = assertUserId(context)
  await usersDb.updateUser(userId, input)
}
