import { isRecordEmpty } from '../record/isRecordEmpty'

export const addQueryParams = (
  baseUrl: string,
  params: Record<string, string | number | boolean>,
) => {
  if (isRecordEmpty(params)) {
    return baseUrl
  }

  const query = Object.entries(params)
    .map((pair) => pair.join('='))
    .join('&')

  return [baseUrl, query].join(baseUrl.includes('?') ? '&' : '?')
}
