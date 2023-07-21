export const pluralize = (number: number, name: string) =>
  `${number} ${name}${
    number.toString().endsWith('1') && number !== 11 ? '' : 's'
  }`
