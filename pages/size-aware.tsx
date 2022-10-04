import { SourceCodeLink } from "components/SourceCode/SourceCodeLink";
import type { NextPage } from "next";
import styled from "styled-components";
import { Card } from "lib/ui/Card";
import { Center } from "lib/ui/Center";
import { ElementSizeAware } from "lib/ui/ElementSizeAware";
import { RegularPage } from "lib/ui/page/RegularPage";
import { HStack } from "lib/ui/Stack";
import { Text } from "lib/ui/Text";
import { getSameDimensionsCSS } from "lib/ui/utils/getSameDimensionsCSS";

const Container = styled(Card)`
  ${getSameDimensionsCSS("100%")}
`;

const ButtonPage: NextPage = () => {
  return (
    <RegularPage
      title={
        <HStack alignItems="center" gap={4}>
          <Text weight="bold" size={24} color="regular">
            Size Aware
          </Text>
          <SourceCodeLink to="https://github.com/RodionChachura/react-toolkit/blob/main/pages/size-aware.tsx" />
        </HStack>
      }
    >
      <ElementSizeAware
        render={({ setElement, size }) => (
          <Container ref={setElement}>
            <Center>
              {size && (
                <Text weight="bold" size={24}>
                  {Math.round(size.width)} x {Math.round(size.height)}
                </Text>
              )}
            </Center>
          </Container>
        )}
      />
    </RegularPage>
  );
};

export default ButtonPage;
