export const shouldBeNoMoreThen = (
  value: number,
  max: number,
  name = 'Value',
) => {
  if (value > max) {
    throw new Error(`${name} should be no more then ${max}`)
  }
}
