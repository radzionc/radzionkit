import { reportError } from '@lib/lambda/reportError'
import { attempt } from '@lib/utils/attempt'
import { AWSLambda } from '@sentry/serverless'
import { SESEvent } from 'aws-lambda'

import { getEnvVar } from './getEnvVar'
import { processSesEventRecord } from './processSesEventRecord'

AWSLambda.init({
  dsn: getEnvVar('SENTRY_KEY'),
})

export const handler = AWSLambda.wrapHandler(async (event: SESEvent) => {
  await Promise.all(
    event.Records.map(async (record) => {
      const { error } = await attempt(processSesEventRecord(record))
      if (error) {
        reportError(error, { record, msg: 'Error processing SES event record' })
      }
    }),
  )
})
