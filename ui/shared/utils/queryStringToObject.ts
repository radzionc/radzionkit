export const queryStringToObject = (queryString: string) => {
  const pairsString =
    queryString[0] === '?' ? queryString.slice(1) : queryString

  const pairs = pairsString
    .split('&')
    .map((str) => str.split('=').map(decodeURIComponent))

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return pairs.reduce<Record<string, any>>((acc, [key, value]) => {
    if (key) {
      acc[key] = value
    }

    return acc
  }, {})
}
