import { Line } from '../../layout/Line'
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
      <Line />
    </VStack>
    {children}
  </VStack>
)
