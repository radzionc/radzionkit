import { HStack } from '@lib/ui/css/stack'
import { transition } from '@lib/ui/css/transition'
import { HSLA } from '@lib/ui/colors/HSLA'
import styled from 'styled-components'
import { round } from '@lib/ui/css/round'
import { ComponentWithValueProps } from '../props'

const Container = styled(HStack)`
  height: 12px;
  width: 100%;
  gap: 1px;
  ${round};
  overflow: hidden;
`

const Box = styled.div`
  height: 100%;
  flex: 1;
  ${transition};
`

export const CountableItemsVisualization = ({
  value,
}: ComponentWithValueProps<HSLA[]>) => {
  return (
    <Container>
      {value.map((color, i) => (
        <Box key={i} style={{ backgroundColor: color.toCssValue() }} />
      ))}
    </Container>
  )
}
