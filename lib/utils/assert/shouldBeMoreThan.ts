export const shouldBeMoreThan = (
  value: number,
  min: number,
  name = 'Value',
) => {
  if (value <= min) {
    throw new Error(`${name} should be more than ${min}`)
  }
}
