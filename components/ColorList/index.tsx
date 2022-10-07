import { range } from "lib/shared/utils/range";
import { paletteColorsCount } from "lib/ui/colors/palette";
import { SameWidthChildrenRow } from "lib/ui/Layout/SameWidthChildrenRow";
import { Line } from "lib/ui/Line";
import { useTheme } from "styled-components";
import { ColorItem } from "./ColorItem";

export const ColorList = () => {
  const {
    colors: { getPaletteColor, ...hslaColors },
  } = useTheme();

  return (
    <SameWidthChildrenRow fullWidth gap={40} minChildrenWidth={240}>
      {Object.entries(hslaColors).map(([name, color]) => (
        <ColorItem color={color} name={name} key={name} />
      ))}
      <Line />
      {range(paletteColorsCount)
        .map(getPaletteColor)
        .map((color, index) => (
          <ColorItem color={color} name={`Palette #${index + 1}`} key={index} />
        ))}
    </SameWidthChildrenRow>
  );
};
