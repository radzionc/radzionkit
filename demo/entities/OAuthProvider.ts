export const oAuthProviders = ['google', 'facebook'] as const
export type OAuthProvider = (typeof oAuthProviders)[number]

export const oAuthProviderName: Record<OAuthProvider, string> = {
  google: 'Google',
  facebook: 'Facebook',
}
