import jwt from 'jsonwebtoken'
import { getSecret } from '../utils/getSecret'

interface DecodedToken {
  id: string
}

export const userIdFromToken = async (token: string) => {
  const secret = await getSecret('SECRET')

  const decoded = jwt.verify(token, secret)

  return decoded ? (decoded as DecodedToken).id : undefined
}
