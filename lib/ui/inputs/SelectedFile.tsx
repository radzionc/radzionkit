import styled from 'styled-components'
import { Button } from '../buttons/Button'
import { inputBackgroundCSS } from './config'
import { HStack } from '@lib/ui/css/stack'
import { Text } from '../text'
import { borderRadius } from '../css/borderRadius'

interface Props {
  name: string
  onRemove: () => void
}

const Container = styled.div`
  ${inputBackgroundCSS};
  ${borderRadius.s}
  padding: 16px;
`

export const SelectedFile = ({ name, onRemove }: Props) => (
  <Container>
    <HStack gap={24} justifyContent="space-between" alignItems="center">
      <Text cropped>{name}</Text>
      <Button onClick={onRemove}>Remove</Button>
    </HStack>
  </Container>
)
