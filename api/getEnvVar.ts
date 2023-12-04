type VariableName =
  | 'SENTRY_KEY'
  | 'FACEBOOK_CLIENT_ID'
  | 'GOOGLE_CLIENT_ID'
  | 'APP_URL'
  | 'EMAIL_DOMAIN'

export const getEnvVar = (name: VariableName): string => {
  const value = process.env[name]
  if (!value) {
    throw new Error(`Missing ${name} environment variable`)
  }

  return value
}
