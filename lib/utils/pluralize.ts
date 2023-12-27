export const pluralize = (number: number, name: string) =>
  [number, pluralizeName(number, name)].join(' ')

export const pluralizeName = (number: number, name: string) =>
  `${name}${number.toString().endsWith('1') && number !== 11 ? '' : 's'}`
