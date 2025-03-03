import { convertDuration } from '@lib/utils/time/convertDuration'
import jwt from 'jsonwebtoken'

import { getSecret } from '../../utils/getSecret'

import { getTokenExpirationTime } from './getTokenExpirationTime'

export const generateAuthLinkToken = async (email: string) =>
  jwt.sign(
    {
      email,
      exp: getTokenExpirationTime(convertDuration(20, 'min', 's')),
    },
    await getSecret('EMAIL_SECRET'),
  )
