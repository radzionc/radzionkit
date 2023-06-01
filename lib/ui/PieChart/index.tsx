import { useMemo } from 'react'
import { useTheme } from 'styled-components'
import { HSLA } from 'lib/ui/colors/HSLA'

import { SvgArc } from './SvgArc'
import { SvgDisk } from './SvgDisk'
import { sum } from 'lib/shared/utils/sum'
import { PieChartLabel } from './PieChartLabel'
import { degreesInCircle } from 'lib/shared/utils/degreesToRadians'

export interface PieChartItem {
  value: number
  color: HSLA
}

interface Props {
  items: PieChartItem[]
}

const cutoutRadiusShare = 0.52

interface PieChartItemWithAngle extends PieChartItem {
  startAngle: number
  endAngle: number
}

const getItemsWithAngles = (items: PieChartItem[]): PieChartItemWithAngle[] => {
  const total = sum(items.map((item) => item.value))

  const itemsWithAngles: PieChartItemWithAngle[] = []

  items.forEach((item, index) => {
    const startAngle = index === 0 ? 0 : itemsWithAngles[index - 1].endAngle
    const endAngle = startAngle + (item.value / total) * degreesInCircle

    itemsWithAngles.push({
      ...item,
      startAngle,
      endAngle,
    })
  })

  return itemsWithAngles
}

const svgViewBoxSize = 100

export const PieChart = ({ items }: Props) => {
  const itemsWithAngles = useMemo(() => getItemsWithAngles(items), [items])

  const { colors } = useTheme()

  const radius = svgViewBoxSize / 2
  const cutoutRadius = radius * cutoutRadiusShare

  const total = sum(items.map((item) => item.value))

  return (
    <svg viewBox={`0 0 ${svgViewBoxSize} ${svgViewBoxSize}`}>
      {items.length < 2 ? (
        <SvgDisk
          color={items.length === 0 ? colors.backgroundGlass : items[0].color}
          radius={radius}
          cutoutRadius={cutoutRadius}
        />
      ) : (
        itemsWithAngles.map(({ color, startAngle, endAngle, value }, index) => {
          const percentage = Math.round((value * 100) / total)

          return (
            <>
              <SvgArc
                key={index}
                color={color.getVariant({ l: () => 46, s: () => 40 })}
                radius={radius}
                cutoutRadius={cutoutRadius}
                startAngle={startAngle}
                endAngle={endAngle}
              />
              {percentage > 5 && (
                <PieChartLabel
                  radius={radius}
                  cutoutRadius={cutoutRadius}
                  startAngle={startAngle}
                  endAngle={endAngle}
                />
              )}
            </>
          )
        })
      )}
    </svg>
  )
}
