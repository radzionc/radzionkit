import { range } from '@lib/utils/array/range'
import { useTheme } from 'styled-components'
import { ColorItem } from './ColorItem'
import { labelColorsCount } from '@lib/ui/colors/generateLabelColorGetter'
import { LineSeparator } from '@lib/ui/layout/LineSeparator'
import { UniformColumnGrid } from '@lib/ui/css/uniformColumnGrid'

export const ColorList = () => {
  const {
    colors: { getLabelColor, ...hslaColors },
  } = useTheme()

  return (
    <UniformColumnGrid fullWidth gap={40} minChildrenWidth={240}>
      {Object.entries(hslaColors).map(([name, color]) => (
        <ColorItem color={color} name={name} key={name} />
      ))}
      <LineSeparator layout="column" />
      {range(labelColorsCount)
        .map(getLabelColor)
        .map((color, index) => (
          <ColorItem color={color} name={`Label #${index + 1}`} key={index} />
        ))}
    </UniformColumnGrid>
  )
}
