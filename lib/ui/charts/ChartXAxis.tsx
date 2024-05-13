import styled from 'styled-components'
import { PositionAbsolutelyCenterVertically } from '../layout/PositionAbsolutelyCenterVertically'
import { useMemo } from 'react'
import { withoutUndefined } from '@lib/utils/array/withoutUndefined'

type ChartXAxisProps = {
  data: number[]
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
  data,
  containerWidth,
  expectedLabelHeight,
  expectedLabelWidth,
  labelsMinDistance,
  renderLabel,
}: ChartXAxisProps) => {
  const stepInPx = containerWidth / (data.length - 1)
  const itemIndexes = useMemo(() => {
    let lastItemEnd = 0
    return withoutUndefined(
      data.map((_, index) => {
        const startsAt = index * stepInPx - expectedLabelWidth / 2
        const endsAt = startsAt + expectedLabelWidth
        if (startsAt < lastItemEnd + labelsMinDistance) return

        if (endsAt > containerWidth) return

        lastItemEnd = endsAt
        return index
      }),
    )
  }, [containerWidth, data, expectedLabelWidth, labelsMinDistance, stepInPx])

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
