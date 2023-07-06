import { range } from "lib/shared/utils/range"
import { SameWidthChildrenRow } from "lib/ui/Layout/SameWidthChildrenRow"
import { Line } from "lib/ui/Line"
import { useTheme } from "styled-components"
import { ColorItem } from "./ColorItem"
import { labelColorsCount } from "lib/ui/colors/generateLabelColorGetter"

export const ColorList = () => {
  const {
    colors: { getLabelColor, ...hslaColors },
  } = useTheme()

  return (
    <SameWidthChildrenRow fullWidth gap={40} minChildrenWidth={240}>
      {Object.entries(hslaColors).map(([name, color]) => (
        <ColorItem color={color} name={name} key={name} />
      ))}
      <Line />
      {range(labelColorsCount)
        .map(getLabelColor)
        .map((color, index) => (
          <ColorItem color={color} name={`Label #${index + 1}`} key={index} />
        ))}
    </SameWidthChildrenRow>
  )
}
