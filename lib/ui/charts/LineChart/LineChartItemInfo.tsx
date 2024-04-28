import styled from 'styled-components'
import { ElementSizeAware } from '../../base/ElementSizeAware'
import { defaultTransition } from '../../css/transition'
import { ComponentWithChildrenProps } from '../../props'

type LineChartItemInfoProps = ComponentWithChildrenProps & {
  containerWidth: number
  isVisible: boolean
  itemIndex: number
  dataPointsNumber: number
}

const Container = styled.div`
  width: 100%;
`

const Content = styled.div`
  width: fit-content;
  white-space: nowrap;
  transition: ${defaultTransition} opacity;
`

export const LineChartItemInfo = ({
  dataPointsNumber,
  itemIndex,
  children,
  containerWidth,
  isVisible,
}: LineChartItemInfoProps) => {
  return (
    <Container>
      <ElementSizeAware
        render={({ setElement, size }) => {
          const getStyle = (): React.CSSProperties => {
            if (!size) {
              return {
                visibility: 'hidden',
              }
            }

            const center = itemIndex * (containerWidth / (dataPointsNumber - 1))
            const contentHalfWidth = size.width / 2
            if (center < contentHalfWidth) {
              return { marginLeft: 0 }
            }

            if (containerWidth - center < contentHalfWidth) {
              return { marginLeft: 'auto' }
            }

            return {
              marginLeft: center - contentHalfWidth,
            }
          }

          return (
            <Content
              ref={setElement}
              style={{
                ...getStyle(),
                opacity: isVisible ? 1 : 0,
              }}
            >
              {children}
            </Content>
          )
        }}
      />
    </Container>
  )
}
