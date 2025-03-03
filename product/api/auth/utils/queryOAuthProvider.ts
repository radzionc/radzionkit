import { safeResolve } from '@lib/utils/promise/safeResolve'
import { ApiError } from '@product/api-interface/ApiError'

export const queryOAuthProvider = async <T>(
  action: string,
  ...args: Parameters<typeof fetch>
) => {
  const response = await fetch(...args)

  if (!response.ok) {
    const message = await safeResolve(response.text(), response.statusText)

    throw new ApiError('invalidInput', `${action} failed: ${message}`)
  }

  return (await response.json()) as T
}
