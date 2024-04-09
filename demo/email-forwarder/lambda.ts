import { AWSLambda } from '@sentry/serverless'
import { SESEvent } from 'aws-lambda'
import { processSesEventRecord } from './processSesEventRecord'
import { getEnvVar } from './getEnvVar'

AWSLambda.init({
  dsn: getEnvVar('SENTRY_KEY'),
})

export const handler = AWSLambda.wrapHandler(async (event: SESEvent) => {
  await Promise.all(event.Records.map(processSesEventRecord))
})
