import jwt from 'jsonwebtoken'
import { getTokenExpirationTime } from './getTokenExpirationTime'
import { getSecret } from '../../utils/getSecret'
import { convertDuration } from '@lib/utils/time/convertDuration'

export const generateAuthLinkToken = async (email: string) =>
  jwt.sign(
    {
      email,
      exp: getTokenExpirationTime(convertDuration(20, 'min', 's')),
    },
    await getSecret('EMAIL_SECRET'),
  )
