import { IncomingHttpHeaders } from 'http'

export const extractHeaderValue = <T extends string>(
  headers: IncomingHttpHeaders,
  name: string,
): T | undefined => {
  const value = headers[name.toLowerCase()]
  if (!value) return undefined

  return (Array.isArray(value) ? value[0] : value) as T
}
