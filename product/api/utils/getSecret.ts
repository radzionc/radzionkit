type SecretName =
  | 'JWT_SECRET'
  | 'FACEBOOK_CLIENT_SECRET'
  | 'GOOGLE_CLIENT_SECRET'
  | 'EMAIL_SECRET'

export const getSecret = async (name: SecretName) => {
  const value = process.env[name]
  if (!value) {
    throw new Error(`Missing ${name} environment variable`)
  }

  return value
}
