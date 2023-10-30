import { HSLA } from './HSLA'

export const getHoverVariant = (color: HSLA) =>
  color.getVariant({ l: (l) => l * 0.92 })
