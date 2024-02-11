export type Query<T, E = unknown> = {
  data: T | undefined
  isPending: boolean
  error: E
}

export type EagerQuery<T, E = unknown> = {
  data: T | undefined
  isPending: boolean
  errors: E[]
}
