import { attempt, withFallback } from '@lib/utils/attempt'
import { ApiError } from '@product/api-interface/ApiError'

export const queryOAuthProvider = async <T>(
  action: string,
  ...args: Parameters<typeof fetch>
) => {
  const response = await fetch(...args)

  if (!response.ok) {
    const message = await withFallback(
      attempt(response.text()),
      response.statusText,
    )

    throw new ApiError('invalidInput', `${action} failed: ${message}`)
  }

  return (await response.json()) as T
}
