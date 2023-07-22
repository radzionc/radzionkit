export function match<T extends string | number | symbol, V>(
  value: T,
  handlers: { [key in T]: () => V },
): V {
  const handler = handlers[value]

  return handler()
}

export function booleanMatch<V>(
  value: boolean,
  handlers: { true: () => V; false: () => V },
): V {
  const handler = value ? handlers.true : handlers.false

  return handler()
}

// TODO: unify into a single function
/*
type BooleanMatcher<V> = { true: () => V; false: () => V }
type Matcher<T extends string | number | symbol, V> = { [key in T]: () => V }

export function match<T extends string | number | symbol | boolean, V>(
  value: T,
  matcher: T extends boolean
    ? BooleanMatcher<V>
    : Matcher<Exclude<T, boolean>, V>
): V {
  if (typeof value === "boolean") {
    const booleanMatcher = matcher as BooleanMatcher<V>
    return value ? booleanMatcher.true() : booleanMatcher.false()
  }

  const nonBooleanMatcher = matcher as Matcher<Exclude<T, boolean>, V>

  return nonBooleanMatcher[value as Exclude<T, boolean>]()
}
*/
