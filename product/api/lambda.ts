import { AWSLambda } from '@sentry/serverless'
import serverlessExpress from '@vendia/serverless-express'
import { getEnvVar } from './getEnvVar'
import { app } from './app'

AWSLambda.init({
  dsn: getEnvVar('SENTRY_KEY'),
})

exports.handler = AWSLambda.wrapHandler(serverlessExpress({ app }))
