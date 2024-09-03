import styled from 'styled-components'
import { range } from '@lib/utils/array/range'
import { VStack } from '@lib/ui/css/stack'

const Line = styled.div`
  width: 100%;
  border-radius: 2px;
  height: 4px;
  background: ${({ theme }) => theme.colors['text'].toCssValue()};

  &:nth-child(1) {
    width: 80%;
  }
  &:nth-child(2) {
    width: 100%;
  }
  &:nth-child(3) {
    width: 60%;
  }
`

const Container = styled.div`
  cursor: pointer;
  width: 100%;
  height: 22px;
`

interface Props {
  onClick: () => void
}

export const Burger = ({ onClick }: Props) => {
  return (
    <Container onClick={onClick}>
      <VStack
        style={{ height: '100%' }}
        alignItems="start"
        justifyContent="space-between"
      >
        {range(3).map((key) => (
          <Line key={key} />
        ))}
      </VStack>
    </Container>
  )
}
