export const isEmpty = <T>(items?: readonly T[]): boolean =>
  !items || items.length === 0
