import { SourceCodeLink } from "components/SourceCode/SourceCodeLink";
import type { NextPage } from "next";
import { GhostButton } from "ui/buttons/rect/GhostButton";
import { OutlinedButton } from "ui/buttons/rect/OutlinedButton";
import { PrimaryButton } from "ui/buttons/rect/PrimaryButton";
import { RegularPage } from "ui/page/RegularPage";
import { HStack, VStack } from "ui/Stack";
import { Text } from "ui/Text";

const ButtonPage: NextPage = () => {
  return (
    <RegularPage
      title={
        <HStack alignItems="center" gap={4}>
          <Text>Button</Text>
          <SourceCodeLink to="https://github.com/RodionChachura/react-toolkit/blob/main/pages/button.tsx" />
        </HStack>
      }
    >
      <VStack gap={40}>
        <HStack gap={20}>
          <PrimaryButton kind="primary">Submit</PrimaryButton>
          <PrimaryButton kind="attention">Submit</PrimaryButton>
        </HStack>
        <HStack gap={20}>
          <GhostButton kind="regular">Submit</GhostButton>
          <GhostButton kind="secondary">Submit</GhostButton>
        </HStack>
        <HStack gap={20}>
          <OutlinedButton>Submit</OutlinedButton>
        </HStack>
      </VStack>
    </RegularPage>
  );
};

export default ButtonPage;
