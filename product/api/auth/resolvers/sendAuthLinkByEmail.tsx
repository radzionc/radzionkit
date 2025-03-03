import { addQueryParams } from '@lib/utils/query/addQueryParams'
import { sendLoginLinkEmail } from '@product/email/utils/sendLogInLinkEmail'

import { getEnvVar } from '../../getEnvVar'
import { ApiResolver } from '../../resolvers/ApiResolver'
import { generateAuthLinkToken } from '../helpers/generateAuthLinkToken'

export const sendAuthLinkByEmail: ApiResolver<'sendAuthLinkByEmail'> = async ({
  input: { email },
}) => {
  const code = await generateAuthLinkToken(email)
  const loginUrl = addQueryParams(`${getEnvVar('APP_URL')}/email-auth`, {
    code,
  })

  await sendLoginLinkEmail({
    loginUrl,
    email,
  })
}
