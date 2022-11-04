import type { NextPage } from "next";
import styled from "styled-components";
import { Center } from "lib/ui/Center";
import { ElementSizeAware } from "lib/ui/ElementSizeAware";
import { Text } from "lib/ui/Text";
import { getSameDimensionsCSS } from "lib/ui/utils/getSameDimensionsCSS";
import { DemoPage } from "components/DemoPage";
import { Panel } from "lib/ui/Panel/Panel";

const Container = styled(Panel)`
  ${getSameDimensionsCSS("100%")}
`;

const ButtonPage: NextPage = () => {
  return (
    <DemoPage youtubeVideoId="PQ7QKBz_zWE" title="Size Aware">
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
    </DemoPage>
  );
};

export default ButtonPage;
