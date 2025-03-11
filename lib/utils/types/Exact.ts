export type Exact<T, U extends T> = U & Record<Exclude<keyof U, keyof T>, never>
