type Pair<T> = readonly [T, T]

export const getPairComplement = <T>(pair: Pair<T>, item: T): T => {
  const result = pair.find((p) => p !== item)

  if (!result) {
    throw new Error(
      `Item "${String(item)}" is not found in pair [${pair.map(String).join(', ')}]`,
    )
  }

  return result
}
