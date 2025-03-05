import { shouldBeDefined } from '@lib/utils/assert/shouldBeDefined'
import { Dimensions } from '@lib/utils/entities/Dimensions'
import { normalizeToMaxDimension } from '@lib/utils/normalizeToMaxDimension'
import { transform } from '@svgr/core'

const getSvgDimensions = (svg: string): Dimensions => {
  const viewBoxMatch = svg.match(/viewBox="([^"]+)"/)

  if (!viewBoxMatch) {
    throw new Error('SVG does not have a viewBox attribute.')
  }

  const [, viewBoxValues] = viewBoxMatch
  const [, , width, height] = viewBoxValues.split(' ').map(parseFloat)

  return { width, height }
}

const extractSvg = (input: string) => {
  const regex = /<svg[\s\S]*?<\/svg>/
  const match = input.match(regex) || undefined
  return shouldBeDefined(match)[0]
}

interface SvgToReactParams {
  svg: string
  componentName: string
}

export const svgToReact = async ({ svg, componentName }: SvgToReactParams) => {
  const svgComponent = await transform(
    svg,
    {
      plugins: ['@svgr/plugin-jsx'],
    },
    { componentName: 'MyComponent' },
  )

  const { width, height } = normalizeToMaxDimension(getSvgDimensions(svg))

  const cleanedSvg = extractSvg(svgComponent)
    .replace(/\s*width="[^"]*"/g, '')
    .replace(/\s*height="[^"]*"/g, '')
    .replace('svg', `svg width="${width}em" height="${height}em"`)
  // .replace('svg', 'svg {...props}')

  return [
    `import { SvgProps } from '@lib/ui/props'`,
    `const ${componentName} = (props: SvgProps) => ${cleanedSvg}`,
    `export default ${componentName}`,
  ].join('\n\n')
}
