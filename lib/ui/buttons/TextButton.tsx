import { ComponentProps, ReactNode } from 'react'
import styled from 'styled-components'
import { UnstyledButton } from './UnstyledButton'
import { transition } from '../css/transition'
import { Text } from '../text'

const Container = styled(UnstyledButton)`
  ${transition};
  &:hover {
    filter: brightness(1.2);
  }
`

interface Props extends ComponentProps<typeof Container> {
  text: ReactNode
  as?: React.ElementType
}

export const TextButton = ({ text, onClick, as }: Props) => (
  <Container onClick={onClick} as={as}>
    <Text as="span" color="primary" weight="bold">
      {text}
    </Text>
  </Container>
)
