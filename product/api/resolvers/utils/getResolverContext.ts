import { IncomingHttpHeaders } from 'http'
import { ApiResolverContext } from '../ApiResolverContext'
import { CountryCode } from '@lib/countries'
import { userIdFromToken } from '../../auth/userIdFromToken'
import { safeResolve } from '@lib/utils/promise/safeResolve'
import { extractHeaderValue } from '@lib/lambda/extractHeaderValue'

interface GetResolverContextParams {
  headers: IncomingHttpHeaders
}

export const getResolverContext = async ({
  headers,
}: GetResolverContextParams): Promise<ApiResolverContext> => {
  const country = extractHeaderValue<CountryCode>(
    headers,
    'cloudfront-viewer-country',
  )
  const token = extractHeaderValue(headers, 'authorization')
  const userId = token
    ? await safeResolve(userIdFromToken(token), undefined)
    : undefined

  return {
    country,
    userId,
  }
}
