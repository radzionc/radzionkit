export const toPercents = (value: number, decimals?: number) => {
  const percents = value * 100

  if (decimals === undefined) {
    return `${percents}%`
  }

  if (decimals === 0) {
    return `${Math.round(percents)}%`
  }

  return `${percents.toFixed(decimals)}%`
}
