export type WithoutUndefinedFields<T extends Record<string, any>> = {
  [K in keyof T]-?: Exclude<T[K], undefined>
}
