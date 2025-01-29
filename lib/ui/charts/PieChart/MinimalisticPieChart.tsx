import { useMemo } from 'react'
import { SvgArc } from './SvgArc'
import { ValueProp } from '../../props'
import { PieChartItem } from './PieChartItem'
import { getPieChartSegmentsAngles } from './utils/getPieChartSegmentsAngles'

const spaceBetweenInDegrees = 0.8

const svgViewBoxSize = 100

export const MinimalisticPieChart = ({ value }: ValueProp<PieChartItem[]>) => {
  const angles = useMemo(
    () => getPieChartSegmentsAngles(value.map((item) => item.value)),
    [value],
  )

  const radius = svgViewBoxSize / 2

  return (
    <svg viewBox={`0 0 ${svgViewBoxSize} ${svgViewBoxSize}`}>
      {value.map((value, index) => {
        const { start, end } = angles[index]
        return (
          <SvgArc
            key={index}
            color={value.color}
            radius={radius}
            cutoutRadius={radius * 0.86}
            startAngle={start}
            endAngle={end - spaceBetweenInDegrees}
          />
        )
      })}
    </svg>
  )
}
