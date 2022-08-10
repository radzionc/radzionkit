import { SourceCodeLink } from "components/SourceCode/SourceCodeLink";
import type { NextPage } from "next";
import { GhostButton } from "ui/buttons/rect/GhostButton";
import { OutlinedButton } from "ui/buttons/rect/OutlinedButton";
import { PrimaryButton } from "ui/buttons/rect/PrimaryButton";
import { SimpleNamedList } from "ui/Layout/SimpleNamedList";
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
      <VStack fullWidth gap={40}>
        <SimpleNamedList name="Primary">
          <HStack gap={20}>
            <PrimaryButton kind="primary">Submit</PrimaryButton>
            <PrimaryButton kind="attention">Submit</PrimaryButton>
          </HStack>
        </SimpleNamedList>
        <SimpleNamedList name="Ghost">
          <HStack gap={20}>
            <GhostButton kind="regular">Submit</GhostButton>
            <GhostButton kind="secondary">Submit</GhostButton>
          </HStack>
        </SimpleNamedList>
        <SimpleNamedList name="Outlined">
          <HStack>
            <OutlinedButton>Submit</OutlinedButton>
          </HStack>
        </SimpleNamedList>
      </VStack>
    </RegularPage>
  );
};

export default ButtonPage;
