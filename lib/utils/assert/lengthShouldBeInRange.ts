export const lengthShouldBeInRange = (
  value: string,
  min: number,
  max: number,
  name = 'Value',
) => {
  if (value.length < min) {
    throw new Error(`${name} must be at least ${min} characters long`)
  }

  if (value.length > max) {
    throw new Error(`${name} must be at most ${max} characters long`)
  }
}
