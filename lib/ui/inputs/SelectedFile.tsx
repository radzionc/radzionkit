import styled from "styled-components";
import { OutlinedButton } from "lib/ui/buttons/rect/OutlinedButton";
import { inputBackgroundCSS, inputBorderRadiusCSS } from "lib/ui/inputs/config";
import { HStack } from "lib/ui/Stack";
import { Text } from "lib/ui/Text";

interface Props {
  name: string;
  onRemove: () => void;
}

const Container = styled.div`
  ${inputBackgroundCSS};
  ${inputBorderRadiusCSS};
  padding: 16px;
`;

export const SelectedFile = ({ name, onRemove }: Props) => (
  <Container>
    <HStack gap={24} justifyContent="space-between" alignItems="center">
      <Text cropped>{name}</Text>
      <OutlinedButton onClick={onRemove}>Remove</OutlinedButton>
    </HStack>
  </Container>
);
