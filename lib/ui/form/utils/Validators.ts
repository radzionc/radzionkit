export type Validators<T> = Partial<{
  [K in keyof T]: (value: T[K], values: T) => string | undefined | void
}>
