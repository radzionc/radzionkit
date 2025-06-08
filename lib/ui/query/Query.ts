export type Query<T, E = unknown> = {
  data: T | undefined
  isPending: boolean
  error: E | null
}

export type EagerQuery<T, E = unknown> = {
  data: T | undefined
  isPending: boolean
  errors: E[]
}

export const inactiveQuery = {
  data: undefined,
  error: null,
  isPending: false,
}

export const getResolvedQuery = <T>(data: T): Query<T> => ({
  data,
  error: null,
  isPending: false,
})
