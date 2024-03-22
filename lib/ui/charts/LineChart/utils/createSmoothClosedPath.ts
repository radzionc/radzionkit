import { Point } from '../../../entities/Point'

export const createSmoothClosedPath = (
  points: Point[],
  controlPoints: Point[],
  width: number,
  height: number,
) => {
  let path = `M${points[0].x * width} ${height}`
  path += ` L${points[0].x * width} ${height - points[0].y * height}`

  for (let i = 0; i < points.length - 1; i++) {
    const current = points[i]
    const next = points[i + 1]
    const control = controlPoints[i]
    path +=
      ` C${control.x * width} ${height - current.y * height},` +
      `${control.x * width} ${height - next.y * height},` +
      `${next.x * width} ${height - next.y * height}`
  }

  path += ` L${points[points.length - 1].x * width} ${height}`
  path += ' Z'

  return path
}
