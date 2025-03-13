import { IncomingHttpHeaders } from 'http'

import { CountryCode } from '@lib/countries'
import { extractHeaderValue } from '@lib/lambda/extractHeaderValue'
import { attempt } from '@lib/utils/attempt'

import { userIdFromToken } from '../../auth/userIdFromToken'
import { ApiResolverContext } from '../ApiResolverContext'

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
    ? await attempt(userIdFromToken(token), undefined)
    : undefined

  return {
    country,
    userId,
  }
}
