import { IncomingHttpHeaders } from 'http'
import { ApiResolverContext } from '../ApiResolverContext'
import { CountryCode } from '@radzionkit/utils/countries'
import { userIdFromToken } from '../../auth/userIdFromToken'
import { safeResolve } from '@radzionkit/utils/promise/safeResolve'
import { extractHeaderValue } from '../../utils/extractHeaderValue'

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
