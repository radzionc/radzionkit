export const sortAlphabetically = <T>(
  arr: T[],
  toString: (value: T) => string,
): T[] => arr.toSorted((a, b) => toString(a).localeCompare(toString(b)))
