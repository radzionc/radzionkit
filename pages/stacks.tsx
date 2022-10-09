import { SourceCodeLink } from "components/SourceCode/SourceCodeLink";
import type { NextPage } from "next";
import styled, { useTheme } from "styled-components";
import { Card } from "lib/ui/Card";
import { HSLA } from "lib/ui/colors/HSLA";

import { RegularPage } from "lib/ui/page/RegularPage";
import { HStack, VStack } from "lib/ui/Stack";
import { Text } from "lib/ui/Text";
import { getSameDimensionsCSS } from "lib/ui/utils/getSameDimensionsCSS";
import { DemoPage } from "components/DemoPage";

const Conent = styled(Card)<{ $color: HSLA }>`
  ${getSameDimensionsCSS(80)};
  background: ${({ $color }) => $color.toCssValue()};
`;

const StacksPage: NextPage = () => {
  const { colors } = useTheme();
  return (
    <DemoPage title="Stacks">
      <VStack alignItems="start" gap={40}>
        <Card>
          <HStack gap={20}>
            <Conent $color={colors.primary} />
            <Conent $color={colors.primary} />
            <Conent $color={colors.primary} />
            <Conent $color={colors.primary} />
          </HStack>
        </Card>
        <Card>
          <VStack gap={20}>
            <Conent $color={colors.attention} />
            <Conent $color={colors.attention} />
            <Conent $color={colors.attention} />
            <Conent $color={colors.attention} />
          </VStack>
        </Card>
      </VStack>
    </DemoPage>
  );
};

export default StacksPage;
