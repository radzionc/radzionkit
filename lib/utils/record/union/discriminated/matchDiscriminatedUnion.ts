type PropertyKey = string | number | symbol

type DiscriminantValues<U, D extends PropertyKey> =
  U extends Record<D, infer X> ? X : never

type PayloadForCase<
  U,
  D extends PropertyKey,
  V extends PropertyKey,
  K extends PropertyKey,
> = U extends { [p in D]: K } & Record<V, infer R> ? R : never

type HandlerMap<U, D extends PropertyKey, V extends PropertyKey, R> = {
  [K in DiscriminantValues<U, D> & PropertyKey]: (
    payload: PayloadForCase<U, D, V, K>,
  ) => R
}

export function matchDiscriminatedUnion<
  U extends Record<D, any> & Record<V, any>,
  R,
  D extends PropertyKey = PropertyKey,
  V extends PropertyKey = PropertyKey,
>(
  value: U,
  discriminantKey: D,
  valueKey: V,
  handlers: HandlerMap<U, D, V, R>,
): R {
  const key = value[discriminantKey] as DiscriminantValues<U, D> & PropertyKey
  const narrowed = value as Extract<U, { [p in D]: typeof key }>
  return handlers[key](narrowed[valueKey])
}
