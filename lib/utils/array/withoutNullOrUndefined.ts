export const withoutNullOrUndefined = <T>(
  items: Array<T | null | undefined>,
): T[] => items.filter((item) => item !== null && item !== undefined) as T[]
