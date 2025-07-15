import { assertFetchResponse } from '../fetch/assertFetchResponse'
import { withoutUndefinedFields } from '../record/withoutUndefinedFields'

type ResponseType = 'json' | 'text' | 'none'

type QueryUrlOptions = {
  responseType?: ResponseType
  body?: any
} & Pick<RequestInit, 'method' | 'headers'>

const processBody = (body: any) => {
  if (body === undefined) {
    return undefined
  }

  if (typeof body === 'string') {
    return body
  }
  return JSON.stringify(body)
}

export function queryUrl(
  url: string | URL,
  options: QueryUrlOptions & { responseType: 'none' },
): Promise<void>

export function queryUrl<T extends string = string>(
  url: string | URL,
  options: QueryUrlOptions & { responseType: 'text' },
): Promise<T>

export function queryUrl<T>(
  url: string | URL,
  options?: QueryUrlOptions & { responseType?: 'json' },
): Promise<T>

export async function queryUrl<T>(
  url: string | URL,
  options: QueryUrlOptions = {},
): Promise<T | string | void> {
  const { responseType = 'json', body, headers, method } = options

  const response = await fetch(
    url,
    withoutUndefinedFields({
      method: method ?? (body ? 'POST' : 'GET'),
      headers: withoutUndefinedFields({
        ...headers,
        'Content-Type': body ? 'application/json' : undefined,
      }),
      body: processBody(body),
    }),
  )

  await assertFetchResponse(response)

  if (responseType !== 'none') {
    return response[responseType]()
  }
}
