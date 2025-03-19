export declare function splitBy<T>(
  items: T[],
  organize: (item: T, index: number) => 0 | 1,
): [T[], T[]]
