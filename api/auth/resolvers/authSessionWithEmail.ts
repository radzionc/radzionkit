import { ApiResolver } from '../../resolvers/ApiResolver'
import { authenticateWithEmail } from '../utils/authenticateWithEmail'
import { authorize } from '../utils/authorize'

export const authSessionWithEmail: ApiResolver<
  'authSessionWithEmail'
> = async ({ input: { code, timeZone }, context: { country } }) => {
  const result = await authenticateWithEmail({
    code,
  })

  return authorize({
    timeZone,
    country,
    ...result,
  })
}
