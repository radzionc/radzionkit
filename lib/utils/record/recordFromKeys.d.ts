export declare const recordFromKeys: <T extends string | number, V>(
  keys: readonly T[],
  getValue: (key: T, index: number) => V,
) => Record<T, V>
