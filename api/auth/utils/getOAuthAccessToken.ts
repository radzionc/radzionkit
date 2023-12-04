import { match } from '@reactkit/utils/match'
import { addQueryParams } from '@reactkit/utils/query/addQueryParams'
import { queryOAuthProvider } from './queryOAuthProvider'
import { getSecret } from '../../utils/getSecret'
import { OAuthProvider } from '@reactkit/entities/OAuthProvider'
import { getEnvVar } from '../../getEnvVar'

interface GetOAuthAccessTokenParams {
  provider: OAuthProvider
  code: string
  redirectUri: string
}

interface TokenResponse {
  access_token: string
}

const GOOGLE_TOKEN_URL = 'https://oauth2.googleapis.com/token'
const FACEBOOK_TOKEN_URL = 'https://graph.facebook.com/v4.0/oauth/access_token'

export const getOAuthAccessToken = async ({
  provider,
  code,
  redirectUri,
}: GetOAuthAccessTokenParams) => {
  const actionName = `get ${provider} access token`
  const response = await match(provider, {
    google: async () =>
      queryOAuthProvider<TokenResponse>(actionName, GOOGLE_TOKEN_URL, {
        method: 'POST',
        body: JSON.stringify({
          client_id: getEnvVar('GOOGLE_CLIENT_ID'),
          client_secret: await getSecret('GOOGLE_CLIENT_SECRET'),
          redirect_uri: redirectUri,
          grant_type: 'authorization_code',
          code,
        }),
      }),
    facebook: async () =>
      queryOAuthProvider<TokenResponse>(
        actionName,
        addQueryParams(FACEBOOK_TOKEN_URL, {
          client_id: getEnvVar('FACEBOOK_CLIENT_ID'),
          client_secret: await getSecret('FACEBOOK_CLIENT_SECRET'),
          redirect_uri: redirectUri,
          code,
        }),
      ),
  })

  return response.access_token
}
