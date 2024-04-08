export function changeItemPosition<T>(
  array: T[],
  sourceIndex: number,
  destinationIndex: number,
): T[] {
  if (
    sourceIndex < 0 ||
    sourceIndex >= array.length ||
    destinationIndex < 0 ||
    destinationIndex >= array.length
  ) {
    throw new Error('Invalid source or destination index')
  }

  const newArray = [...array]
  const [item] = newArray.splice(sourceIndex, 1)
  newArray.splice(destinationIndex, 0, item)
  return newArray
}
