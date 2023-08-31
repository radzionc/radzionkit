export function updateAtIndex<T>(
  array: T[],
  index: number,
  update: (value: T) => T,
) {
  return array.map((value, i) => (i === index ? update(value) : value))
}
