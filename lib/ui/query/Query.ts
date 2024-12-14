export type Query<T, E = unknown> = {
  data: T | undefined
  isPending: boolean
  isLoading?: boolean
  error: E | null
}

export type EagerQuery<T, E = unknown> = {
  data: T | undefined
  isPending: boolean
  isLoading?: boolean
  errors: E[]
}

export const pendingQuery = {
  data: undefined,
  error: null,
  isPending: true,
}

export const inactiveQuery: Query<undefined> = {
  data: undefined,
  error: null,
  isPending: false,
  isLoading: false,
}

export const getResolvedQuery = <T>(data: T): Query<T> => ({
  data,
  error: null,
  isPending: false,
})
