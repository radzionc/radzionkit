export function matchDiscriminatedUnion<
  D extends string,
  V extends string,
  U extends { [P in D]: string } & { [Q in V]: unknown },
  K extends U[D] = U[D],
  R = never,
>(
  unionValue: U,
  discriminantKey: D,
  valueKey: V,
  handlers: {
    [P in K]: (val: Extract<U, { [Q in D]: P }>[V]) => R
  },
): R {
  const discriminantValue = unionValue[discriminantKey] as K
  const handler = handlers[discriminantValue]
  const value = (
    unionValue as Extract<U, { [P in D]: typeof discriminantValue }>
  )[valueKey]
  return handler(value)
}
