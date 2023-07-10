import styled from "styled-components"
import { HStack } from "lib/ui/Stack"
import { Text } from "lib/ui/Text"
import { Panel } from "lib/ui/Panel/Panel"
import { CloseButton } from "lib/ui/buttons/CloseButton"

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
