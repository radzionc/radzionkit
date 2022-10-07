import { SourceCodeLink } from "components/SourceCode/SourceCodeLink";
import type { NextPage } from "next";
import { useTheme } from "styled-components";
import { Card } from "lib/ui/Card";

import { RegularPage } from "lib/ui/page/RegularPage";
import { HStack, VStack } from "lib/ui/Stack";
import { Text } from "lib/ui/Text";
import { ColorList } from "components/ColorList";

const StacksPage: NextPage = () => {
  const { colors } = useTheme();
  return (
    <RegularPage
      title={
        <HStack alignItems="center" gap={4}>
          <Text>Colors</Text>
          <SourceCodeLink to="https://github.com/RodionChachura/react-toolkit/blob/main/pages/colors.tsx" />
        </HStack>
      }
    >
      <ColorList />
    </RegularPage>
  );
};

export default StacksPage;
