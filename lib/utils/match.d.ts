export declare function match<T extends string | number | symbol, V>(
  value: T,
  handlers: {
    [key in T]: () => V
  },
): V
