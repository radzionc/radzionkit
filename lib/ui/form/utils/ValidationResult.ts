export type ValidationResult<T> = Partial<{
  [P in keyof T]: string
}>
