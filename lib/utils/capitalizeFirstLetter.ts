export const capitalizeFirstLetter = <T extends string>(
  text: T,
): Capitalize<T> =>
  (text.charAt(0).toUpperCase() + text.slice(1)) as Capitalize<T>
