import styled from 'styled-components'
import { useMemo } from 'react'

type LineChartItemInfoProps = {
  containerWidth: number
  itemExpectedHeight: number
  itemExpectedWidth: number
  data: number[]
  itemIndex: number | null
  render: (itemIndex: number) => React.ReactNode
}

const Container = styled.div`
  width: 100%;
  position: relative;
`

const Content = styled.div`
  position: absolute;
  bottom: 0;
  white-space: nowrap;
  display: flex;
  justify-content: center;
`

export const LineChartItemInfo = ({
  data,
  itemIndex,
  render,
  containerWidth,
  itemExpectedHeight,
  itemExpectedWidth,
}: LineChartItemInfoProps) => {
  const style: React.CSSProperties = useMemo(() => {
    if (itemIndex === null) {
      return {}
    }

    const center = itemIndex * (containerWidth / (data.length - 1))
    const contentHalfWidth = itemExpectedWidth / 2
    if (center < contentHalfWidth) {
      return { left: 0 }
    }

    if (containerWidth - center < contentHalfWidth) {
      return { right: 0 }
    }

    return { left: center - contentHalfWidth, minWidth: itemExpectedWidth }
  }, [containerWidth, data.length, itemExpectedWidth, itemIndex])

  return (
    <Container style={{ minHeight: itemExpectedHeight }}>
      <Content style={style}>{itemIndex !== null && render(itemIndex)}</Content>
    </Container>
  )
}
