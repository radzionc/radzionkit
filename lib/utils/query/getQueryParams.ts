export function getQueryParams<T extends Record<string, string>>(
  url: string,
): T {
  const queryParams = new URLSearchParams(new URL(url).search)
  const paramsObject = {} as T

  queryParams.forEach((value, key) => {
    paramsObject[key as keyof T] = value as T[keyof T]
  })

  return paramsObject
}
