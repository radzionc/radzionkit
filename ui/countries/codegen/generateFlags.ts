import { CountryCode, countryCodes } from '@reactkit/utils/countries'
import { makeRecord } from '@reactkit/utils/makeRecord'
import fs from 'fs'
import path from 'path'
import { capitalizeFirstLetter } from '@reactkit/utils/capitalizeFirstLetter'
import { createTsFile } from '@reactkit/codegen/utils/createTsFile'
import { svgToReact } from '../../codegen/svgToReact'

const getSvgFlagPath = (code: CountryCode) =>
  path.resolve(__dirname, './flags', `${code.toLowerCase()}.svg`)

const flagsPath = path.resolve(__dirname, '../flags')

const getFlagComponentName = (code: CountryCode) =>
  `${capitalizeFirstLetter(code.toLowerCase())}Flag`

const generateFlags = async () => {
  const svgRecord = makeRecord(countryCodes, (code) =>
    fs.readFileSync(getSvgFlagPath(code), 'utf8'),
  )

  const generatedBy = '@reactkit/ui/country/codegen/generateFlags.ts'

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

  const imports = [
    `import dynamic from 'next/dynamic'`,
    `import { SVGProps } from 'react'`,
    `import { ComponentType } from 'react'`,
    `import { CountryCode } from '@reactkit/utils/countries'`,
    `import { CountryFlagDynamicFallback, CountryFlagFallbackPropsProvider } from '../CountryFlagDynamicFallback'`,
  ].join('\n')

  const countryFlagComponentRecord = makeRecord(countryCodes, (code) => {
    const componentName = getFlagComponentName(code)
    return `dynamic(() => import('./${componentName}'), { ssr: false, loading: () => <CountryFlagDynamicFallback /> })`
  })

  const content = [
    imports,
    `const countryFlagRecord: Record<CountryCode, ComponentType<SVGProps<SVGSVGElement>>> = {
      ${Object.entries(countryFlagComponentRecord)
        .map(([key, value]) => {
          return `${key}: ${value}`
        })
        .join(',')}
    }`,
    `interface CountryFlagProps extends SVGProps<SVGSVGElement> { code: CountryCode }`,
    `export const CountryFlag = (props: CountryFlagProps) => {
      const Component = countryFlagRecord[props.code]
      return (
        <CountryFlagFallbackPropsProvider value={props}>
          <Component {...props} />
        </CountryFlagFallbackPropsProvider>
      )
    }`,
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
