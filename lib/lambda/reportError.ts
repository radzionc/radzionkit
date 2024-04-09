import { ErrorWithContext } from '@lib/utils/errors/ErrorWithContext'
import { getErrorMessage } from '@lib/utils/getErrorMessage'
import { isRecordEmpty } from '@lib/utils/record/isRecordEmpty'
import * as Sentry from '@sentry/serverless'

export const reportError = (
  err: unknown,
  errorContext?: Record<string, any>,
) => {
  const context = {
    ...errorContext,
    ...(err instanceof ErrorWithContext ? err.context : {}),
  }
  console.log(
    `Reporting an error: ${getErrorMessage(err)}${
      !isRecordEmpty(context)
        ? ` with context: ${JSON.stringify(errorContext)}`
        : ''
    }}`,
  )

  Sentry.withScope((scope) => {
    Object.entries(context).forEach(([key, value]) => {
      scope.setExtra(key, value)
    })

    Sentry.captureException(err)
  })
}
