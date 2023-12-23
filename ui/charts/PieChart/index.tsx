import { useMemo } from 'react'
import React from 'react'
import styled, { useTheme } from 'styled-components'
import { SvgArc, polarToCartesian } from './SvgArc'
import { sum } from '@radzionkit/utils/array/sum'
import { HSLA } from '../../colors/HSLA'

export interface PieChartItem {
  value: number
  color: HSLA
  labelColor?: HSLA
}

interface Props {
  items: PieChartItem[]
}

const cutoutRadiusShare = 0.4
const totalDegrees = 360
const spaceBetweenInDegrees = 0.8

interface PieChartItemWithAngle extends PieChartItem {
  startAngle: number
  endAngle: number
}

const getItemsWithAngles = (items: PieChartItem[]): PieChartItemWithAngle[] => {
  const total = sum(items.map((item) => item.value))

  const itemsWithAngles: PieChartItemWithAngle[] = []

  items.forEach((item, index) => {
    const startAngle = index === 0 ? 0 : itemsWithAngles[index - 1].endAngle
    const endAngle = startAngle + (item.value / total) * totalDegrees

    itemsWithAngles.push({
      ...item,
      startAngle,
      endAngle,
    })
  })

  return itemsWithAngles
}

const svgViewBoxSize = 100
const labelSize = 20

const Label = styled.text`
  font-size: 9px;
  font-weight: 400;
`

export const PieChart = ({ items }: Props) => {
  const { colors } = useTheme()

  const itemsWithAngles = useMemo(() => {
    const result = getItemsWithAngles(items.filter((item) => item.value > 0))

    if (!result.length) {
      result.push({
        value: 1,
        color: colors.foreground,
        startAngle: 0,
        endAngle: totalDegrees,
      })
    }

    return result
  }, [colors, items])

  const radius = svgViewBoxSize / 2
  const cutoutRadius = radius * cutoutRadiusShare

  const total = sum(items.map((item) => item.value))

  return (
    <svg viewBox={`0 0 ${svgViewBoxSize} ${svgViewBoxSize}`}>
      {itemsWithAngles.map(
        ({ color, startAngle, endAngle, value, labelColor }, index) => {
          if (value === 0) {
            return null
          }
          const labelAngle = startAngle + (endAngle - startAngle) / 2
          const labelPosition = polarToCartesian(
            radius,
            cutoutRadius + (radius - cutoutRadius) / 2,
            labelAngle,
          )
          labelPosition.x -= labelSize / 2
          labelPosition.y -= labelSize / 2

          const percentage = Math.round((value * 100) / total)

          return (
            <React.Fragment key={index}>
              <SvgArc
                color={color.getVariant({ a: () => 0.2 })}
                radius={radius}
                cutoutRadius={cutoutRadius}
                startAngle={startAngle}
                endAngle={endAngle - spaceBetweenInDegrees}
              />
              <SvgArc
                color={color}
                radius={radius}
                cutoutRadius={radius * 0.96}
                startAngle={startAngle}
                endAngle={endAngle - spaceBetweenInDegrees}
              />
              {percentage > 5 && itemsWithAngles.length > 1 && (
                <g>
                  <rect
                    fill="transparent"
                    {...labelPosition}
                    width={labelSize}
                    height={labelSize}
                  />
                  <Label
                    x={labelPosition.x + labelSize / 2}
                    y={labelPosition.y + labelSize / 2}
                    dominantBaseline="middle"
                    textAnchor="middle"
                    fill={(labelColor || colors.contrast).toCssValue()}
                  >
                    {percentage}
                    <tspan fill={colors.text.toCssValue()} fontSize={7}>
                      {' '}
                      %
                    </tspan>
                  </Label>
                </g>
              )}
            </React.Fragment>
          )
        },
      )}
    </svg>
  )
}
