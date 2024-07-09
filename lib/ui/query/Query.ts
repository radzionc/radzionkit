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
