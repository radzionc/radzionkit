import { degreesInCircle } from "lib/shared/utils/degreesToRadians"
import { HSLA } from "./HSLA"

export const labelColorsCount = 12

interface LabelColorGetterParams {
  saturation: number
  lightness: number
}

export const generateLabelColorGetter =
  ({ saturation, lightness }: LabelColorGetterParams) =>
  (labelIndex: number): HSLA => {
    const labelIndexOnInterval =
      (labelIndex % labelColorsCount) / labelColorsCount

    const hue = degreesInCircle * labelIndexOnInterval

    return new HSLA(hue, saturation, lightness)
  }
