import { Dimensions } from '@reactkit/utils/entities/Dimensions'
import { shouldBeDefined } from '@reactkit/utils/shouldBeDefined'
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

const toEmDimensions = ({ width, height }: Dimensions): Dimensions => {
  const maxDimension = Math.max(width, height)

  // Convert dimensions to em values
  const widthInEm = width / maxDimension
  const heightInEm = height / maxDimension

  return { width: widthInEm, height: heightInEm }
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
  // Convert kebab-case attributes to camelCase.
  const svgComponent = await transform(
    svg,
    {
      plugins: ['@svgr/plugin-jsx'],
    },
    { componentName: 'MyComponent' },
  )

  const svgDimensions = getSvgDimensions(svg)
  const { width, height } = toEmDimensions(svgDimensions)

  const cleanedSvg = extractSvg(svgComponent)
    .replace(/\s*width="[^"]*"/g, '') // Remove width attribute
    .replace(/\s*height="[^"]*"/g, '') // Remove height attribute
    .replace('svg', `svg width="${width}em" height="${height}em"`)
    .replace('svg', 'svg {...props}')
  return [
    `import { SVGProps } from 'react'`,
    `const ${componentName} = (props: SVGProps<SVGSVGElement>) => ${cleanedSvg}`,
    `export default ${componentName}`,
  ].join('\n\n')
}
