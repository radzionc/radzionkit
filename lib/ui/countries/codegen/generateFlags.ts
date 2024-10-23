import { CountryCode, countryCodes } from '@lib/countries'
import fs from 'fs'
import path from 'path'
import { capitalizeFirstLetter } from '@lib/utils/capitalizeFirstLetter'
import { createTsFile } from '@lib/codegen/utils/createTsFile'
import { svgToReact } from '../../codegen/svgToReact'
import { recordFromKeys } from '@lib/utils/record/recordFromKeys'

const getSvgFlagPath = (code: CountryCode) =>
  path.resolve(__dirname, './flags', `${code.toLowerCase()}.svg`)

const flagsPath = path.resolve(__dirname, '../flags')

const getFlagComponentName = (code: CountryCode) =>
  `${capitalizeFirstLetter(code.toLowerCase())}Flag`

const generateFlags = async () => {
  const svgRecord = recordFromKeys(countryCodes, (code) =>
    fs.readFileSync(getSvgFlagPath(code), 'utf8'),
  )

  const generatedBy = '@lib/ui/country/codegen/generateFlags.ts'

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

  const countryFlagComponentRecord = recordFromKeys(countryCodes, (code) => {
    const componentName = getFlagComponentName(code)
    return `React.lazy(() => import('./${componentName}'))`
  })

  const content = [
    `import React, { ComponentType, Suspense } from 'react';`,
    `import { CountryCode } from '@lib/countries';`,
    `import { SvgIconProps } from '@lib/ui/icons/SvgIconProps';`,
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
