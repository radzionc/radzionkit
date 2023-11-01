import styled from 'styled-components'
import { CloseButton } from '../../buttons/CloseButton'
import { HStack } from '../../layout/Stack'
import { Panel } from '../../panel/Panel'
import { Text } from '../../text'

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
