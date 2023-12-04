import { generateAuthLinkToken } from '../auth/helpers/generateAuthLinkToken'
import { sendLoginLinkEmail } from '@reactkit/email/utils/sendLogInLinkEmail'
import { addQueryParams } from '@reactkit/utils/query/addQueryParams'
import { getEnvVar } from '../getEnvVar'

const sendAuthEmail = async (email: string) => {
  const code = await generateAuthLinkToken(email)
  const loginUrl = addQueryParams(`${getEnvVar('APP_URL')}/email-auth`, {
    code,
  })
  await sendLoginLinkEmail({
    loginUrl,
    email,
  })
}

sendAuthEmail('geekrodion@gmail.com')
