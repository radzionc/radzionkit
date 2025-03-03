import jwt from 'jsonwebtoken'

import { getSecret } from '../../utils/getSecret'

import { AuthenticationResult } from './AuthenticationResult'

interface AuthenticateWithEmailParams {
  code: string
}

interface EmailCodePayload {
  email: string
}

export const authenticateWithEmail = async ({
  code,
}: AuthenticateWithEmailParams): Promise<AuthenticationResult> => {
  const secret = await getSecret('EMAIL_SECRET')
  const { email } = jwt.verify(code, secret) as EmailCodePayload

  return {
    email,
  }
}
