import { ComponentWithChildrenProps } from 'lib/shared/props'
import { Line } from 'lib/ui/Line'
import { VStack } from 'lib/ui/Stack'
import { Text } from 'lib/ui/Text'

interface Props extends ComponentWithChildrenProps {
  name: string
}

export const FormSection = ({ name, children }: Props) => (
  <VStack fullWidth gap={20}>
    <VStack fullWidth gap={8}>
      <Text color="supporting3">{name}</Text>
      <Line />
    </VStack>
    {children}
  </VStack>
)
