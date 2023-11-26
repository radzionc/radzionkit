export const splitRecord = <K extends string, T extends Record<string, any>>(
  obj: T,
  organize: (key: string, value: any) => K,
  initialValue: Record<K, Partial<T>>,
): Record<K, Partial<T>> => {
  return Object.entries(obj).reduce((acc, [key, value]) => {
    const bucketIndex = organize(key, value)
    acc[bucketIndex][key as keyof T] = value

    return acc
  }, initialValue)
}
