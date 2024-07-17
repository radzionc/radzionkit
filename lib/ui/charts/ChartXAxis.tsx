import styled from 'styled-components'
import { PositionAbsolutelyCenterVertically } from '../layout/PositionAbsolutelyCenterVertically'
import { useMemo } from 'react'
import { withoutUndefined } from '@lib/utils/array/withoutUndefined'
import { range } from '@lib/utils/array/range'

type ChartXAxisProps = {
  dataSize: number
  containerWidth: number
  expectedLabelHeight: number
  expectedLabelWidth: number
  labelsMinDistance: number
  renderLabel: (index: number) => React.ReactNode
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
  labelsMinDistance,
  renderLabel,
}: ChartXAxisProps) => {
  const stepInPx = containerWidth / (dataSize - 1)
  const itemIndexes = useMemo(() => {
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
  }, [
    containerWidth,
    dataSize,
    expectedLabelWidth,
    labelsMinDistance,
    stepInPx,
  ])

  return (
    <Container
      style={{
        minHeight: expectedLabelHeight,
      }}
    >
      {itemIndexes.map((index) => {
        return (
          <PositionAbsolutelyCenterVertically
            key={index}
            left={index * stepInPx}
          >
            {renderLabel(index)}
          </PositionAbsolutelyCenterVertically>
        )
      })}
    </Container>
  )
}
