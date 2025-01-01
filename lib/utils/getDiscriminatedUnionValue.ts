export function getDiscriminatedUnionValue<
  D extends string,
  V extends string,
  U extends { [P in D]: string } & { [Q in V]: unknown },
  T extends U[D],
>(
  unionValue: U,
  discriminantKey: D,
  valueKey: V,
  expectedCase: T,
): Extract<U, { [P in D]: T }>[V] {
  if (unionValue[discriminantKey] !== expectedCase) {
    throw new Error(
      `Expected case "${expectedCase}", but got "${unionValue[discriminantKey]}".`,
    )
  }

  return (unionValue as Extract<U, { [P in D]: T }>)[valueKey]
}
