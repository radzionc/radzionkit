import { match } from '@lib/utils/match'
import { useId, useMemo } from 'react'
import styled, { useTheme } from 'styled-components'

import { Match } from '../../base/Match'
import { HSLA } from '../../colors/HSLA'
import { transition } from '../../css/transition'

import { calculateControlPoints } from './utils/calculateControlPoints'
import { createSharpClosedPath } from './utils/createSharpClosedPath'
import { createSharpPath } from './utils/createSharpPath'
import { createSmoothClosedPath } from './utils/createSmoothClosedPath'
import { createSmoothPath } from './utils/createSmoothPath'

type LineChartFillKind = 'gradient' | 'solid' | 'none'
type DataPointsConnectionKind = 'sharp' | 'smooth'
type StrokeKind = 'solid' | 'none'

interface LineChartProps {
  data: number[]
  height: number
  width: number
  color: HSLA
  fillKind?: LineChartFillKind
  strokeKind?: StrokeKind
  dataPointsConnectionKind?: DataPointsConnectionKind
}

const Path = styled.path`
  ${transition}
`

export const LineChart = ({
  data,
  width,
  height,
  color,
  fillKind = 'gradient',
  strokeKind = 'solid',
  dataPointsConnectionKind = 'smooth',
}: LineChartProps) => {
  const [path, closedPath] = useMemo(() => {
    if (data.length === 0) return ['', '']

    const points = data.map((value, index) => ({
      x: index / (data.length - 1),
      y: value,
    }))

    return match(dataPointsConnectionKind, {
      smooth: () => {
        const controlPoints = calculateControlPoints(points)
        return [
          createSmoothPath(points, controlPoints, width, height),
          createSmoothClosedPath(points, controlPoints, width, height),
        ]
      },
      sharp: () => {
        return [
          createSharpPath(points, width, height),
          createSharpClosedPath(points, width, height),
        ]
      },
    })
  }, [data, dataPointsConnectionKind, height, width])

  const theme = useTheme()

  const id = useId()

  return (
    <svg
      style={{ minWidth: width, overflow: 'visible' }}
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
    >
      {strokeKind === 'solid' && (
        <Path
          d={path}
          fill="none"
          stroke={color.toCssValue()}
          strokeWidth="2"
        />
      )}
      <Match
        value={fillKind}
        gradient={() => (
          <>
            <defs>
              <linearGradient id={id} x1="0%" y1="0%" x2="0%" y2="100%">
                <stop
                  offset="0%"
                  stopColor={color.getVariant({ a: () => 0.4 }).toCssValue()}
                />
                <stop
                  offset="100%"
                  stopColor={theme.colors.transparent.toCssValue()}
                />
              </linearGradient>
            </defs>
          </>
        )}
        none={() => null}
        solid={() => (
          <>
            <Path
              d={closedPath}
              fill={theme.colors.background.toCssValue()}
              strokeWidth="0"
            />
          </>
        )}
      />
      {fillKind !== 'none' && (
        <Path
          d={closedPath}
          fill={match(fillKind, {
            gradient: () => `url(#${id})`,
            solid: () => color.getVariant({ a: () => 0.4 }).toCssValue(),
          })}
          strokeWidth="0"
        />
      )}
    </svg>
  )
}
