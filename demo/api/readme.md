## Deployment

To deploy this project to AWS Lambda set up the following environment variables:

```bash
export BUCKET=your-bucket-name
export BUCKET_KEY=lambda.zip
export FUNCTION_NAME=your-function-name
```

Then run the following commands:

```bash
. ./deploy.sh
```

## Fron-end Integration

app/utils/callApi.ts

```ts
import { ApiError } from '@demo/api-interface/ApiError'
import {
  ApiMethodName,
  ApiInterface,
} from '@demo/api-interface/ApiInterface'
import { asyncFallbackChain } from '@lib/utils/promise/asyncFallbackChain'
import { joinPaths } from '@lib/utils/query/joinPaths'
import { safeResolve } from '@lib/utils/promise/safeResolve'

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
```

app/api/hooks/useApi.ts

```ts
import {
  ApiInterface,
  ApiMethodName,
} from '@demo/api-interface/ApiInterface'
import { useCallback } from 'react'
import { callApi } from '../utils/callApi'
import { shouldBeDefined } from '@lib/utils/shouldBeDefined'
import { useAuthSession } from 'auth/hooks/useAuthSession'
import { ApiError } from '@demo/api-interface/ApiError'

const baseUrl = shouldBeDefined(process.env.NEXT_PUBLIC_API_URL)

export const useApi = () => {
  const [authSession, setAuthSession] = useAuthSession()
  const authToken = authSession?.token

  const call = useCallback(
    async <M extends ApiMethodName>(
      method: M,
      input: ApiInterface[M]['input'],
    ) => {
      try {
        const result = await callApi({
          baseUrl,
          method,
          input,
          authToken,
        })

        return result
      } catch (err) {
        if (err instanceof ApiError && err.id === 'invalidAuthToken') {
          setAuthSession(undefined)
        }
        throw err
      }
    },
    [authToken, setAuthSession],
  )

  return { call } as const
}
```

app/api/hooks/useApiQuery.ts

```ts
import { withoutUndefined } from '@lib/utils/array/withoutUndefined'
import { useQuery } from 'react-query'
import { useApi } from './useApi'
import {
  ApiInterface,
  ApiMethodName,
} from '@demo/api-interface/ApiInterface'

export const getApiQueryKey = <M extends ApiMethodName>(
  method: M,
  input: ApiInterface[M]['input'],
) => withoutUndefined([method, input])

export const useApiQuery = <M extends ApiMethodName>(
  method: M,
  input: ApiInterface[M]['input'],
) => {
  const { call } = useApi()

  return useQuery(getApiQueryKey(method, input), () => call(method, input))
}
```

app/api/hooks/useApiMutation.ts

```ts
import {
  ApiInterface,
  ApiMethodName,
} from '@demo/api-interface/ApiInterface'
import { useMutation } from 'react-query'
import { useApi } from './useApi'

interface ApiMutationOptions<M extends ApiMethodName> {
  onSuccess?: (data: ApiInterface[M]['output']) => void
  onError?: (error: unknown) => void
}

export const useApiMutation = <M extends ApiMethodName>(
  method: M,
  options: ApiMutationOptions<M> = {},
) => {
  const api = useApi()

  return useMutation(
    (input: ApiInterface[M]['input']) => api.call(method, input),
    options,
  )
}
```
