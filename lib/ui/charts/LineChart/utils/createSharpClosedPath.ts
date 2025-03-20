import { Point } from '@lib/utils/entities/Point'

export const createSharpClosedPath = (
  points: Point[],
  width: number,
  height: number,
) => {
  let path = `M${points[0].x * width} ${height}`
  path += ` L${points[0].x * width} ${height - points[0].y * height}`

  for (let i = 1; i < points.length; i++) {
    const point = points[i]
    path += ` L${point.x * width} ${height - point.y * height}`
  }

  path += ` L${points[points.length - 1].x * width} ${height}`
  path += ' Z'

  return path
}
