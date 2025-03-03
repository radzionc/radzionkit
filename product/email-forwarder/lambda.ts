import { AWSLambda } from '@sentry/serverless'
import { SESEvent } from 'aws-lambda'

import { getEnvVar } from './getEnvVar'
import { processSesEventRecord } from './processSesEventRecord'

AWSLambda.init({
  dsn: getEnvVar('SENTRY_KEY'),
})

export const handler = AWSLambda.wrapHandler(async (event: SESEvent) => {
  await Promise.all(event.Records.map(processSesEventRecord))
})
