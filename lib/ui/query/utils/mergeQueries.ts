import { Query } from '../Query'

export const mergeQueries = <T extends Record<string, Query<any, any>>>(
  queries: T,
): Query<{ [K in keyof T]: T[K]['data'] }, T[keyof T]['error']> => {
  const isPending = Object.values(queries).some((q) => q.isPending)
  const error =
    Object.values(queries).find((q) => q.error !== null)?.error || null

  const data =
    !isPending && error === null
      ? (Object.fromEntries(
          Object.entries(queries).map(([key, query]) => [key, query.data]),
        ) as { [K in keyof T]: T[K]['data'] })
      : undefined

  return {
    data,
    isPending,
    error,
  }
}
