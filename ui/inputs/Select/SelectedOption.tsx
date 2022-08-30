import styled from "styled-components";
import { CloseIconButton } from "ui/buttons/square/CloseIconButton";
import { Card } from "ui/Card";
import { HStack } from "ui/Stack";
import { Text } from "ui/Text";

interface Props {
  value: string;
  onRemove: () => void;
}

const Container = styled(Card)`
  padding: 8px;
  border-radius: 8px;
`;

export const SelectedOption = ({ value, onRemove }: Props) => {
  return (
    <Container>
      <HStack gap={16}>
        <Text color="supporting">{value}</Text>
        <CloseIconButton onClick={onRemove} />
      </HStack>
    </Container>
  );
};
