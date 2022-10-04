import { Path } from "navigation/Path";
import styled from "styled-components";
import { VStack } from "lib/ui/Stack";
import { NavigationToInternalPage } from "./NavigationToInternalPage";
import { ComponentWithChildrenProps } from "lib/shared/props";

const Container = styled.div`
  min-width: 260px;
  height: 100%;
  background: ${({ theme }) => theme.colors.foreground.toCssValue()};
  padding: 40px 8px 20px 8px;
  overflow: auto;
`;

export const Sidebar = ({ children }: ComponentWithChildrenProps) => {
  return (
    <Container>
      <VStack alignItems="center" fullHeight justifyContent="space-between">
        {children}
      </VStack>
    </Container>
  );
};
