import { HSLA } from "lib/ui/colors/HSLA";

interface Props {
  color: HSLA;
  radius: number;
  cutoutRadius: number;
}

export const SvgDisk = ({ color, radius, cutoutRadius }: Props) => (
  <circle
    stroke={color.toCssValue()}
    strokeWidth={radius - cutoutRadius}
    fill="transparent"
    r={radius - (radius - cutoutRadius) / 2}
    cx={radius}
    cy={radius}
  />
);
