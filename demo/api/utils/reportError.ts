import * as Sentry from '@sentry/serverless'

export const reportError = (err: unknown, metadata?: Record<string, any>) => {
  console.log(
    `Reporting an error: ${JSON.stringify(err)}${
      metadata ? ` with metadata: ${JSON.stringify(metadata)}` : ''
    }}`,
  )

  Sentry.withScope((scope) => {
    if (metadata) {
      Object.entries(metadata).forEach(([key, value]) => {
        scope.setExtra(key, value)
      })
    }

    Sentry.captureException(err)
  })
}
