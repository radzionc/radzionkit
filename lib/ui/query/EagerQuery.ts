export type EagerQuery<T, E = unknown> = {
  data: T | undefined
  isPending: boolean
  errors: E[]
}
