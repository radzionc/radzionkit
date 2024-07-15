export const rectangleCorners = [
  'top-left',
  'top-right',
  'bottom-right',
  'bottom-left',
] as const

export type RectangleCorner = (typeof rectangleCorners)[number]
