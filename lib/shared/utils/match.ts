export function match<T extends string | number | symbol, V>(
  value: T,
  handlers: { [key in T]: () => V }
): V {
  const handler = handlers[value]

  return handler()
}

export function booleanMatch<V>(
  value: boolean,
  handlers: { true: () => V, false: () => V }
): V {
  const handler = value ? handlers.true : handlers.false

  return handler()
}