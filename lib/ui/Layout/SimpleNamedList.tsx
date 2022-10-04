import { VStack } from "lib/ui/Stack";
import { Text } from "lib/ui/Text";

interface Props {
  name: string;
  children?: React.ReactNode;
}

export const SimpleNamedList = ({ name, children }: Props) => {
  return (
    <VStack fullWidth gap={8}>
      <Text color="supporting2">{name}</Text>
      {children}
    </VStack>
  );
};
