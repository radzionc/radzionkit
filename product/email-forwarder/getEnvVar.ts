type VariableName = 'SENTRY_KEY' | 'FORWARD_TO' | 'EMAILS_BUCKET'

export const getEnvVar = (name: VariableName): string => {
  const value = process.env[name]
  if (!value) {
    throw new Error(`Missing ${name} environment variable`)
  }

  return value
}
