import { assertFetchResponse } from '../fetch/assertFetchResponse'

export const queryUrl = async <T>(url: string): Promise<T> => {
  const response = await fetch(url)

  await assertFetchResponse(response)

  return response.json()
}
