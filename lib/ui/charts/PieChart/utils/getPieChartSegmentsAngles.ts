import { sum } from '@lib/utils/array/sum'

type SegmentAngle = {
  start: number
  end: number
}

const totalDegrees = 360

export const getPieChartSegmentsAngles = (data: number[]): SegmentAngle[] => {
  const total = sum(data)

  const result: SegmentAngle[] = []

  data.forEach((dataPoint, index) => {
    const start = index === 0 ? 0 : result[index - 1].end
    const end = start + (dataPoint / total) * totalDegrees

    result.push({
      start,
      end,
    })
  })

  return result
}
