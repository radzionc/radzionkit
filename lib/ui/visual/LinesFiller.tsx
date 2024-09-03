import { TakeWholeSpaceAbsolutely } from '@lib/ui/css/takeWholeSpaceAbsolutely'
import { HStack } from '@lib/ui/css/stack'
import { range } from '@lib/utils/array/range'
import styled from 'styled-components'
import { ElementSizeAware } from '../base/ElementSizeAware'
import { toSizeUnit } from '../css/toSizeUnit'
import { ElementSize } from '../hooks/useElementSize'
import { calculateRightAngleTriangleSide } from '@lib/utils/math/calculateRightAngleTriangleSide'
import { calculateHypotenuse } from '@lib/utils/math/calculateHypotenuse'
import { degreesToRadians } from '@lib/utils/degreesToRadians'
import { UIComponentProps } from '../props'

const Wrapper = styled(TakeWholeSpaceAbsolutely)`
  overflow: hidden;
`

const Container = styled(HStack)`
  height: 100%;
  justify-content: space-between;
  align-items: center;
`

type LinesFillerProps = UIComponentProps & {
  rotation?: number
  density?: number
  lineWidth?: number
}

export const LinesFiller = ({
  rotation = 45,
  lineWidth = 2,
  density = 0.32,
  ...rest
}: LinesFillerProps) => {
  return (
    <ElementSizeAware
      render={({ setElement, size }) => {
        const fill = ({ width, height }: ElementSize) => {
          const offset = calculateRightAngleTriangleSide({
            givenSideLength: height,
            angleInRadians: degreesToRadians(Math.abs(rotation)),
            knownSide: 'adjacent',
          })
          const totalWidth = width + offset

          const count = Math.round((totalWidth / lineWidth) * density)

          const lineSize = calculateHypotenuse(offset, height)

          return (
            <Container
              style={{
                width: totalWidth,
                marginLeft: -(offset / 2),
              }}
            >
              {range(count).map((index) => (
                <div
                  style={{
                    height: lineSize,
                    transform: `rotate(${rotation}deg)`,
                    borderLeft: `${toSizeUnit(lineWidth)} solid`,
                  }}
                  key={index}
                />
              ))}
            </Container>
          )
        }
        return (
          <Wrapper {...rest} ref={setElement}>
            {size && fill(size)}
          </Wrapper>
        )
      }}
    />
  )
}
