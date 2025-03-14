import {
  SecretsManagerClient,
  PutSecretValueCommand,
} from '@aws-sdk/client-secrets-manager'
import { shouldBePresent } from '@lib/utils/assert/shouldBePresent'
import { recordFromKeys } from '@lib/utils/record/recordFromKeys'

import { secretNames } from '..'
import { getEnvVar } from '../getEnvVar'

const secretsManager = new SecretsManagerClient({})

async function setSecrets() {
  const secrets = recordFromKeys(secretNames, (key) =>
    shouldBePresent(process.env[`SECRET_${key}`]),
  )

  const command = new PutSecretValueCommand({
    SecretId: getEnvVar('SECRETS'),
    SecretString: JSON.stringify(secrets),
  })

  await secretsManager.send(command)
  console.log('Successfully updated secrets in AWS Secrets Manager')
}

setSecrets().catch(console.error)
