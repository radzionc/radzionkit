import styled from 'styled-components'
import { CloseIconButton } from 'lib/ui/buttons/square/CloseIconButton'
import { HStack } from 'lib/ui/Stack'
import { Text } from 'lib/ui/Text'
import { Panel } from 'lib/ui/Panel/Panel'

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
        <CloseIconButton type="button" onClick={onRemove} />
      </HStack>
    </Container>
  )
}
