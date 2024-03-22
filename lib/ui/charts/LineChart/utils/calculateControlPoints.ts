import { Point } from '../../../entities/Point'

export const calculateControlPoints = (dataPoints: Point[]) => {
  const controlPoints = []
  for (let i = 0; i < dataPoints.length - 1; i++) {
    const current = dataPoints[i]
    const next = dataPoints[i + 1]
    controlPoints.push({
      x: (current.x + next.x) / 2,
      y: (current.y + next.y) / 2,
    })
  }
  return controlPoints
}
