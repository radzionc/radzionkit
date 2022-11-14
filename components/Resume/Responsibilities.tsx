import { dotSeparator } from "lib/ui/SeparatedBy";
import { HStack, VStack } from "lib/ui/Stack";
import { Text } from "lib/ui/Text";

interface Props {
  items: string[];
}

export const Responsibilities = ({ items }: Props) => (
  <VStack gap={4}>
    {items.map((responsibility, index) => (
      <HStack key={index} gap={4}>
        <Text color="supporting3">{dotSeparator}</Text>
        <Text color="supporting">{responsibility}</Text>
      </HStack>
    ))}
  </VStack>
);
