import styled from "styled-components";
import { OutlinedButton } from "ui/buttons/rect/OutlinedButton";
import { inputBackgroundCSS, inputBorderRadiusCSS } from "ui/inputs/config";
import { HStack } from "ui/Stack";
import { Text } from "ui/Text";

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
