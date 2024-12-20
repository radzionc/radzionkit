export function matchDiscriminatedUnion<
  D extends string,
  V extends string,
  U extends { [P in D]: string } & { [Q in V]: unknown },
  R,
>(
  unionValue: U,
  discriminantKey: D,
  valueKey: V,
  handlers: {
    [K in U[D]]: (val: Extract<U, { [P in D]: K }>[V]) => R
  },
): R {
  const discriminantValue = unionValue[discriminantKey] as U[D]
  const handler = handlers[discriminantValue]
  const value = (
    unionValue as Extract<U, { [P in D]: typeof discriminantValue }>
  )[valueKey]
  return handler(value)
}
