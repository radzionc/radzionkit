/**
 * Rotates an array so that the element at the specified index becomes the first element.
 * @param array The array to rotate
 * @param startIndex The index that should become the new start of the array
 * @returns A new array with elements rotated to the new starting position
 */
export const rotateArray = <T>(array: T[], startIndex: number): T[] => {
  if (!array.length) return []

  const normalizedIndex =
    ((startIndex % array.length) + array.length) % array.length

  return [...array.slice(normalizedIndex), ...array.slice(0, normalizedIndex)]
}
