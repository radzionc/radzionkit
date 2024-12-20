import { generateImages } from 'pwa-asset-generator'
import { lightTheme } from '../../theme/lightTheme'
import path from 'path'
import fs from 'fs'
import { darkTheme } from '../../theme/darkTheme'
import { withoutDuplicates } from '@lib/utils/array/withoutDuplicates'
import { createTsFile } from '@lib/codegen/utils/createTsFile'

interface generateIconsParams {
  lightModeIconPath: string
  darkModeIconPath?: string
  manifestPath: string
  publicDirectory: string
  iconImagesLocation?: string
  codeDirectory: string
}

export const generateIcons = async ({
  lightModeIconPath,
  darkModeIconPath,
  manifestPath,
  publicDirectory,
  iconImagesLocation = 'images/icon',
  codeDirectory,
}: generateIconsParams) => {
  const imagesOutputDirectory = path.resolve(
    publicDirectory,
    iconImagesLocation,
  )

  const generatorOutput = [
    await generateImages(lightModeIconPath, imagesOutputDirectory, {
      manifest: manifestPath,
      background: lightTheme.colors.background.toCssValue(),
      iconOnly: true,
      pathOverride: iconImagesLocation,
    }),
  ]

  generatorOutput.push(
    await generateImages(lightModeIconPath, imagesOutputDirectory, {
      manifest: manifestPath,
      background: lightTheme.colors.background.toCssValue(),
      splashOnly: true,
      pathOverride: iconImagesLocation,
    }),
  )

  if (darkModeIconPath && fs.existsSync(darkModeIconPath)) {
    generatorOutput.push(
      await generateImages(darkModeIconPath, imagesOutputDirectory, {
        manifest: manifestPath,
        background: darkTheme.colors.background.toCssValue(),
        splashOnly: true,
        darkMode: true,
        pathOverride: iconImagesLocation,
      }),
    )
  }
  generatorOutput.push(
    await generateImages(lightModeIconPath, imagesOutputDirectory, {
      manifest: manifestPath,
      opaque: false,
      iconOnly: true,
      favicon: true,
      type: 'png',
      pathOverride: iconImagesLocation,
    }),
  )

  const metaTags = withoutDuplicates(
    generatorOutput.flatMap((r) => Object.values(r.htmlMeta)),
  )
    .join('')
    .replace(/>/g, '/>')

  const content = `export const IconMetaTags = () => <>${metaTags}</>`

  createTsFile({
    extension: 'tsx',
    directory: codeDirectory,
    fileName: 'IconMetaTags',
    content,
    generatedBy: '@lib/ui/metadata/codegen/generateIcons.ts',
  })
}
