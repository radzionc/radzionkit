import { CountryCode } from '@lib/countries'
import { getUserByEmail, putUser } from '@product/db/user'
import { getUserInitialFields } from '@product/entities-utils/user/getUserInitialFields'

import { AuthSession } from '../../../../lib/auth/AuthSession'

import { AuthenticationResult } from './AuthenticationResult'
import { getAuthSession } from './getAuthSession'

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
