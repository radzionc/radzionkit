export const enforceRange = (value: number, min: number, max: number) =>
  Math.max(min, Math.min(max, value))
