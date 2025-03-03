import fs from 'fs'
import path from 'path'

import { createTsFile } from '@lib/codegen/utils/createTsFile'

const generateCountries = async () => {
  const countryNameRecord = JSON.parse(
    fs.readFileSync(path.resolve(__dirname, './countries.json'), 'utf8'),
  )

  const content = [
    `export const countryNameRecord = ${JSON.stringify(
      countryNameRecord,
    )} as const`,
    `export type CountryCode = keyof typeof countryNameRecord`,
    `export const countryCodes = Object.keys(countryNameRecord) as CountryCode[]`,
  ].join('\n\n')

  await createTsFile({
    directory: path.resolve(__dirname, '../'),
    fileName: 'index',
    content,
    generatedBy: '@lib/countries/codegen/generateCountries.ts',
  })
}

generateCountries()
