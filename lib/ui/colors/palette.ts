import { degreesInCircle } from "lib/shared/utils/degreesToRadians";
import { sum } from "lib/shared/utils/sum";
import { HSLA } from "./HSLA";

export const paletteColorsCount = 12;

const paletteHueRanges = [[0, degreesInCircle]];

const paletteHueCoverage = paletteHueRanges.map(([start, end]) => end - start);
const paletteHueTotalCoverage = sum(paletteHueCoverage);
const paletteHueRangesInterval = paletteHueCoverage.reduce(
  (acc, coverage, index) => {
    const previousPoint = acc[index - 1] || 0;
    const point = previousPoint + coverage / paletteHueTotalCoverage;

    return [...acc, point];
  },
  [] as number[]
);

export const generatePaleteCollorGetter =
  (saturation: number, lightness: number) =>
  (index: number): HSLA => {
    const pointOnInterval = (index % paletteColorsCount) / paletteColorsCount;
    const rangeIndex = paletteHueRangesInterval.findIndex(
      (point) => pointOnInterval < point
    );

    const intervalStart = paletteHueRangesInterval[rangeIndex - 1] || 0;
    const intervalEnd = paletteHueRangesInterval[rangeIndex];
    const intevalLength = intervalEnd - intervalStart;

    const range = paletteHueRanges[rangeIndex];
    const rangeCoverage = paletteHueCoverage[rangeIndex];

    const hue =
      range[0] +
      rangeCoverage * ((pointOnInterval - intervalStart) / intevalLength);

    return new HSLA(hue, saturation, lightness);
  };
