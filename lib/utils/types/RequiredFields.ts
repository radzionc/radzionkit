export type RequiredFields<T, K extends keyof T> = Required<Pick<T, K>> &
  Omit<T, K>
