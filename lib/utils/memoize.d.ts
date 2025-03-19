export declare const memoize: <T extends (...args: any[]) => any>(
  func: T,
  getKey?: (...args: any[]) => string,
) => T
