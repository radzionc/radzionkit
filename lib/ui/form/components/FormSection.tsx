import { LineSeparator } from '../../layout/LineSeparator'
import { VStack } from '../../layout/Stack'
import { ComponentWithChildrenProps } from '../../props'
import { Text } from '../../text'

interface Props extends ComponentWithChildrenProps {
  name: string
}

export const FormSection = ({ name, children }: Props) => (
  <VStack fullWidth gap={20}>
    <VStack fullWidth gap={8}>
      <Text color="shy">{name}</Text>
      <LineSeparator layout="column" />
    </VStack>
    {children}
  </VStack>
)
