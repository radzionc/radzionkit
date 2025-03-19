export declare const debounce: <T extends (...args: any[]) => any>(
  func: T,
  delay: number,
) => (...args: Parameters<T>) => Promise<ReturnType<T>>
