export type Validators<T> = {
  [K in keyof T]: (value: T[K], values: T) => string | undefined | void
}
