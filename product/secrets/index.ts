import {
  SecretsManagerClient,
  GetSecretValueCommand,
} from '@aws-sdk/client-secrets-manager'
import { shouldBePresent } from '@lib/utils/assert/shouldBePresent'
import { assertField } from '@lib/utils/record/assertField'

import { getEnvVar } from './getEnvVar'

export const secretNames = [
  'googleClientSecret',
  'facebookClientSecret',
  'paddleApiKey',
  'telegramBotToken',
  'emailSecret',
  'jwtSecret',
] as const

type SecretName = (typeof secretNames)[number]

const getSecrets = async () => {
  const client = new SecretsManagerClient({})
  const command = new GetSecretValueCommand({ SecretId: getEnvVar('SECRETS') })
  const { SecretString } = await client.send(command)

  return shouldBePresent(SecretString)
}

export const getSecret = async <T = string>(name: SecretName): Promise<T> => {
  const secrets = await getSecrets()

  return assertField(JSON.parse(secrets), name)
}
