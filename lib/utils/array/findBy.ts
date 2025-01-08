export const findBy = <T>(
  items: readonly T[],
  key: keyof T,
  value: T[keyof T],
): T | undefined => {
  return items.find((item) => item[key] === value)
}
