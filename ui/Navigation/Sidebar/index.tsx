import styled from "styled-components";
import { VStack } from "ui/Stack";

const Container = styled.div`
  min-width: 260px;
  height: 100%;
  background: ${({ theme }) => theme.colors.foreground.toCssValue()};
  padding: 40px 8px 20px 8px;
  overflow: auto;
`;

export const Sidebar = () => {
  return (
    <Container>
      <VStack alignItems="center" fullHeight justifyContent="space-between">
        <VStack fullWidth gap={20}>
          <VStack fullWidth>
            <p>navigation will be here</p>
          </VStack>
        </VStack>
        <VStack gap={20} fullWidth>
          <p>github link will be here</p>
        </VStack>
      </VStack>
    </Container>
  );
};
