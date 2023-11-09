export type Validators<T> = {
  [K in keyof T]: (value: T[K]) => string | undefined
}
