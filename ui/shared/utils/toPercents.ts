type Format = 'round'

export const toPercents = (value: number, format?: Format) => {
  const number = value * 100

  return `${format === 'round' ? Math.round(number) : number}%`
}
