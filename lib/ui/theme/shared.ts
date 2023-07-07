import { HSLA } from "../colors/HSLA"

export const sharedColors = {
  primary: new HSLA(210, 77, 51),

  attention: new HSLA(4, 69, 62),

  alert: new HSLA(0, 79, 63),
  idle: new HSLA(32, 79, 63),
  success: new HSLA(130, 56, 52),

  white: new HSLA(0, 0, 100),
  transparent: new HSLA(0, 0, 0, 0),
} as const
