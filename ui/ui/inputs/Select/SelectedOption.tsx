import styled from "styled-components"
import { HStack } from "ui/Stack"
import { Text } from "ui/Text"
import { Panel } from "ui/Panel/Panel"
import { CloseButton } from "ui/buttons/CloseButton"

interface Props {
  value: string
  onRemove: () => void
}

const Container = styled(Panel)`
  padding: 8px;
  border-radius: 8px;
`

export const SelectedOption = ({ value, onRemove }: Props) => {
  return (
    <Container>
      <HStack gap={16}>
        <Text color="supporting">{value}</Text>
        <CloseButton type="button" onClick={onRemove} />
      </HStack>
    </Container>
  )
}
