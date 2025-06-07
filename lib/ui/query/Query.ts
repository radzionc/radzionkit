export type Query<T, E = unknown> = {
  data: T | undefined
  isLoading?: boolean
  error: E | null
}

export type EagerQuery<T, E = unknown> = {
  data: T | undefined
  isLoading?: boolean
  errors: E[]
}

export const inactiveQuery = {
  data: undefined,
  error: null,
  isLoading: false,
}

export const getResolvedQuery = <T>(data: T): Query<T> => ({
  data,
  error: null,
  isLoading: false,
})
