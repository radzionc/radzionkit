export function parseNumericEnum<T, K extends string>(numericEnum: {
  [key in K]: T;
}) {
  const values: T[] = [];
  const keys: string[] = [];

  Object.values(numericEnum).forEach((value) => {
    if (isNaN(Number(value))) {
      keys.push(value as string);
    } else {
      values.push(value as T);
    }
  });

  return {
    values,
    keys,
  };
}
