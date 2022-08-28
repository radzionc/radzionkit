import { Path } from "navigation/Path";
import styled from "styled-components";
import { VStack } from "ui/Stack";
import { NavigationToInternalPage } from "./NavigationToInternalPage";

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
            <NavigationToInternalPage path={Path.Button} name="Button" />
            <NavigationToInternalPage path={Path.Modal} name="Modal" />
            <NavigationToInternalPage path={Path.TextInput} name="Text Input" />
            <NavigationToInternalPage path={Path.SizeAware} name="Size Aware" />
            <NavigationToInternalPage path={Path.Select} name="Select" />
            <NavigationToInternalPage
              path={Path.SelectView}
              name="Select View"
            />

            <NavigationToInternalPage
              path={Path.GridTable}
              name="CSS Grid Table"
            />
          </VStack>
        </VStack>
      </VStack>
    </Container>
  );
};
