import { getUserByEmail, putUser } from '@reactkit/db/user'
import { AuthenticationResult } from './AuthenticationResult'
import { getAuthSession } from './getAuthSession'
import { getUserInitialFields } from '@reactkit/entities-utils/user/getUserInitialFields'
import { AuthSession } from '@reactkit/entities/AuthSession'
import { CountryCode } from '@reactkit/utils/countries'

interface AuthorizeParams extends AuthenticationResult {
  country?: CountryCode
}

export const authorize = async ({
  email,
  name,
  country,
}: AuthorizeParams): Promise<AuthSession> => {
  const existingUser = await getUserByEmail(email, ['id'])
  if (existingUser) {
    return getAuthSession(existingUser.id)
  }

  const newUser = getUserInitialFields({
    email,
    name,
    country,
  })

  await putUser(newUser)

  const session = await getAuthSession(newUser.id)

  return {
    ...session,
    isFirst: true,
  }
}
