import { ComponentWithChildrenProps } from "shared/props";
import { Line } from "ui/Line";
import { VStack } from "ui/Stack";
import { Text } from "ui/Text";

interface Props extends ComponentWithChildrenProps {
  name: string;
}

export const FormSection = ({ name, children }: Props) => (
  <VStack fullWidth gap={20}>
    <VStack fullWidth gap={8}>
      <Text color="supporting3">{name}</Text>
      <Line />
    </VStack>
    {children}
  </VStack>
);
