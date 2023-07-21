import styled from "styled-components"
import { inputBackgroundCSS, inputBorderRadiusCSS } from "ui/inputs/config"
import { HStack } from "ui/Stack"
import { Text } from "ui/Text"
import { Button } from "../buttons/Button"

interface Props {
  name: string
  onRemove: () => void
}

const Container = styled.div`
  ${inputBackgroundCSS};
  ${inputBorderRadiusCSS};
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
