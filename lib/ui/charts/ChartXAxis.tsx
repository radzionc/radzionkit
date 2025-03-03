import { range } from '@lib/utils/array/range'
import { withoutUndefined } from '@lib/utils/array/withoutUndefined'
import { useMemo } from 'react'
import styled from 'styled-components'

import { PositionAbsolutelyCenterVertically } from '../layout/PositionAbsolutelyCenterVertically'

import { JustifyPoints, positionDataPoint } from './utils/positionDataPoints'

type ChartXAxisProps = {
  dataSize: number
  containerWidth: number
  expectedLabelHeight: number
  expectedLabelWidth: number
  labelsMinDistance?: number
  renderLabel: (index: number) => React.ReactNode
  justifyPoints?: JustifyPoints
}

const Container = styled.div`
  width: 100%;
  position: relative;
`

export const ChartXAxis = ({
  dataSize,
  containerWidth,
  expectedLabelHeight,
  expectedLabelWidth,
  labelsMinDistance = 0,
  renderLabel,
  justifyPoints = 'space-between',
}: ChartXAxisProps) => {
  const itemIndexes = useMemo(() => {
    if (justifyPoints === 'space-between') {
      const stepInPx = containerWidth / (dataSize - 1)
      let lastItemEnd = 0
      return withoutUndefined(
        range(dataSize).map((index) => {
          const startsAt = index * stepInPx - expectedLabelWidth / 2
          const endsAt = startsAt + expectedLabelWidth
          if (startsAt < lastItemEnd + labelsMinDistance) return

          if (endsAt > containerWidth) return

          lastItemEnd = endsAt
          return index
        }),
      )
    }

    const itemSize = containerWidth / dataSize
    const step = Math.ceil(expectedLabelWidth / itemSize)

    return range(dataSize).filter((index) => index % step === 0)
  }, [
    containerWidth,
    dataSize,
    expectedLabelWidth,
    justifyPoints,
    labelsMinDistance,
  ])

  return (
    <Container
      style={{
        minHeight: expectedLabelHeight,
      }}
    >
      {itemIndexes.map((itemIndex) => {
        const center = positionDataPoint({
          dataSize,
          containerWidth,
          index: itemIndex,
          justifyPoints,
        })

        return (
          <PositionAbsolutelyCenterVertically key={itemIndex} left={center}>
            {renderLabel(itemIndex)}
          </PositionAbsolutelyCenterVertically>
        )
      })}
    </Container>
  )
}
