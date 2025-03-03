import { AWSLambda } from '@sentry/serverless'
import serverlessExpress from '@vendia/serverless-express'

import { app } from './app'
import { getEnvVar } from './getEnvVar'

AWSLambda.init({
  dsn: getEnvVar('SENTRY_KEY'),
})

exports.handler = AWSLambda.wrapHandler(serverlessExpress({ app }))
