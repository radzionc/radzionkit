export function bigintMax(...values: bigint[]): bigint {
  if (values.length === 0) {
    throw new Error('No arguments provided to bigIntMax')
  }

  return values.reduce(
    (max, current) => (current > max ? current : max),
    values[0],
  )
}
