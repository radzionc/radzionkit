import { asyncFallbackChain } from '@lib/utils/promise/asyncFallbackChain'
import { safeResolve } from '@lib/utils/promise/safeResolve'
import { joinPaths } from '@lib/utils/query/joinPaths'
import { ApiError } from '@product/api-interface/ApiError'
import {
  ApiMethodName,
  ApiInterface,
} from '@product/api-interface/ApiInterface'

interface CallApiParams<M extends ApiMethodName> {
  baseUrl: string
  method: M
  input: ApiInterface[M]['input']
  authToken?: string
}

export const callApi = async <M extends ApiMethodName>({
  baseUrl,
  method,
  input,
  authToken,
}: CallApiParams<M>): Promise<ApiInterface[M]['output']> => {
  const url = joinPaths(baseUrl, method)

  const headers: HeadersInit = {
    'Content-Type': 'application/json',
  }
  if (authToken) {
    headers['Authorization'] = authToken
  }

  const response = await fetch(url, {
    method: 'POST',
    headers,
    body: JSON.stringify(input),
  })

  if (!response.ok) {
    const error = await asyncFallbackChain<Error>(
      async () => {
        const result = await response.json()
        if ('id' in result) {
          return new ApiError(result.id, result.message)
        }
        return new Error(JSON.stringify(result))
      },
      async () => {
        const message = await response.text()
        return new Error(message)
      },
      async () => new Error(response.statusText),
    )

    throw error
  }

  return safeResolve(response.json(), undefined)
}
