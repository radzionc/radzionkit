import { dotSeparator } from '@lib/ui/layout/StackSeparatedBy'
import { HStack, VStack } from '@lib/ui/layout/Stack'
import { Text } from '@lib/ui/text'

interface Props {
  items: string[]
}

export const Responsibilities = ({ items }: Props) => (
  <VStack gap={4}>
    {items.map((responsibility, index) => (
      <HStack key={index} gap={4}>
        <Text color="shy">{dotSeparator}</Text>
        <Text color="supporting">{responsibility}</Text>
      </HStack>
    ))}
  </VStack>
)
