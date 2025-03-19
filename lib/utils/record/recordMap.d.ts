export declare const recordMap: <K extends string | number, T, V>(
  record: Record<K, T>,
  fn: (value: T, key: K) => V,
) => Record<K, V>
