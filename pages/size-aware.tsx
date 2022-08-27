import { SourceCodeLink } from "components/SourceCode/SourceCodeLink";
import type { NextPage } from "next";
import styled from "styled-components";
import { Card } from "ui/Card";
import { Center } from "ui/Center";
import { ElementSizeAware } from "ui/ElementSizeAware";
import { RegularPage } from "ui/page/RegularPage";
import { HStack } from "ui/Stack";
import { Text } from "ui/Text";
import { getSameDimensionsCSS } from "ui/utils/getSameDimensionsCSS";

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
