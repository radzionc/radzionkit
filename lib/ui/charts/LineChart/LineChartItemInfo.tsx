import styled from 'styled-components'
import { ElementSizeAware } from '../../base/ElementSizeAware'
import { defaultTransition } from '../../css/transition'

type LineChartItemInfoProps = {
  containerWidth: number
  minHeight: number
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
  transition: ${defaultTransition} opacity;
`

export const LineChartItemInfo = ({
  data,
  itemIndex,
  render,
  containerWidth,
  minHeight,
}: LineChartItemInfoProps) => {
  return (
    <Container style={{ minHeight }}>
      <ElementSizeAware
        render={({ setElement, size }) => {
          const getLeft = () => {
            if (size === null || itemIndex === null) return

            const center = itemIndex * (containerWidth / (data.length - 1))
            const contentHalfWidth = size.width / 2
            if (center < contentHalfWidth) return 0

            if (containerWidth - center < contentHalfWidth) {
              return containerWidth - size.width
            }

            return center - contentHalfWidth
          }

          const left = getLeft()

          const hasPosition = left !== undefined

          return (
            <Content
              style={{ left, opacity: hasPosition ? 1 : 0 }}
              ref={setElement}
            >
              {itemIndex !== null && hasPosition && render(itemIndex)}
            </Content>
          )
        }}
      />
    </Container>
  )
}
