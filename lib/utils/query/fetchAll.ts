interface FetchAllParams<R, T, V> {
  fetch: (pageParam: V | undefined) => Promise<R>
  getNextPageParam: (lastPage: R) => V | null
  getItems: (page: R) => T[]
}

export function fetchAll<R, T, V>({
  fetch,
  getNextPageParam,
  getItems,
}: FetchAllParams<R, T, V>) {
  const recursiveFetch = async (
    pageParam: V | null | undefined,
  ): Promise<T[]> => {
    if (pageParam === null) {
      return []
    }

    const response = await fetch(pageParam)

    return [
      ...getItems(response),
      ...(await recursiveFetch(getNextPageParam(response))),
    ]
  }
  return recursiveFetch(undefined)
}
