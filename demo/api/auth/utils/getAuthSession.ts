import { convertDuration } from '@lib/utils/time/convertDuration'
import jwt from 'jsonwebtoken'
import { getSecret } from '../../utils/getSecret'
import { AuthSession } from '@demo/entities/AuthSession'

const tokenLifespanInDays = 300

export const getAuthSession = async (
  id: string,
): Promise<Omit<AuthSession, 'isFirst'>> => {
  const expiresAt = Math.round(
    convertDuration(Date.now(), 'ms', 's') +
      convertDuration(tokenLifespanInDays, 'd', 's'),
  )
  const secret = await getSecret('JWT_SECRET')
  const token = jwt.sign({ id, exp: expiresAt }, secret)

  return {
    token,
    expiresAt,
  }
}
