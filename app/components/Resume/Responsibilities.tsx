import { dotSeparator } from "@reactkit/ui/ui/StackSeparatedBy"
import { HStack, VStack } from "@reactkit/ui/ui/Stack"
import { Text } from "@reactkit/ui/ui/Text"

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
