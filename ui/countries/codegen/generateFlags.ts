import { CountryCode, countryCodes } from '@radzionkit/utils/countries'
import fs from 'fs'
import path from 'path'
import { capitalizeFirstLetter } from '@radzionkit/utils/capitalizeFirstLetter'
import { createTsFile } from '@radzionkit/codegen/utils/createTsFile'
import { svgToReact } from '../../codegen/svgToReact'
import { makeRecord } from '@radzionkit/utils/record/makeRecord'

const getSvgFlagPath = (code: CountryCode) =>
  path.resolve(__dirname, './flags', `${code.toLowerCase()}.svg`)

const flagsPath = path.resolve(__dirname, '../flags')

const getFlagComponentName = (code: CountryCode) =>
  `${capitalizeFirstLetter(code.toLowerCase())}Flag`

const generateFlags = async () => {
  const svgRecord = makeRecord(countryCodes, (code) =>
    fs.readFileSync(getSvgFlagPath(code), 'utf8'),
  )

  const generatedBy = '@radzionkit/ui/country/codegen/generateFlags.ts'

  await Promise.all(
    countryCodes.map(async (code) => {
      const svg = svgRecord[code]
      const content = await svgToReact({
        svg,
        componentName: getFlagComponentName(code),
      })

      return createTsFile({
        extension: 'tsx',
        directory: flagsPath,
        fileName: getFlagComponentName(code as CountryCode),
        content,
        generatedBy,
      })
    }),
  )

  const countryFlagComponentRecord = makeRecord(countryCodes, (code) => {
    const componentName = getFlagComponentName(code)
    return `React.lazy(() => import('./${componentName}'))`
  })

  const content = [
    `import React, { ComponentType, Suspense } from 'react';`,
    `import { CountryCode } from '@radzionkit/utils/countries';`,
    `import { SvgIconProps } from '@radzionkit/ui/icons/SvgIconProps';`,
    `import { CountryFlagFallback } from '../CountryFlagFallback';`,
    `const countryFlagRecord: Record<CountryCode, ComponentType<SvgIconProps>> = {
      ${Object.entries(countryFlagComponentRecord)
        .map(([key, value]) => `${key}: ${value}`)
        .join(',\n')}
    };`,
    `interface CountryFlagProps extends SvgIconProps { code: CountryCode }`,
    `export const CountryFlag = (props: CountryFlagProps) => {
      const Component = countryFlagRecord[props.code];
      return (
        <Suspense fallback={<CountryFlagFallback code={props.code} />}>
          <Component {...props} />
        </Suspense>
      );
    };`,
    `export default CountryFlag;`,
  ].join('\n\n')

  await createTsFile({
    extension: 'tsx',
    directory: flagsPath,
    fileName: 'CountryFlag',
    content,
    generatedBy,
  })
}

generateFlags()
