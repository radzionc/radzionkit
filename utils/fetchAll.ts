export function fetchAll<T, V>(
  fetch: (pageParam: V | undefined) => Promise<T[]>,
  getNextPageParam: (lastPage: T[]) => V | null,
) {
  const recursiveFetch = async (
    pageParam: V | null | undefined,
  ): Promise<T[]> => {
    if (pageParam === null) {
      return []
    }

    const response = await fetch(pageParam)

    return [...response, ...(await recursiveFetch(getNextPageParam(response)))]
  }
  return recursiveFetch(undefined)
}
