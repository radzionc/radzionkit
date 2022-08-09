import type { NextPage } from "next";
import { GhostButton } from "ui/buttons/rect/GhostButton";
import { OutlinedButton } from "ui/buttons/rect/OutlinedButton";
import { PrimaryButton } from "ui/buttons/rect/PrimaryButton";
import { RegularPage } from "ui/page/RegularPage";
import { HStack, VStack } from "ui/Stack";

const ButtonPage: NextPage = () => {
  return (
    <RegularPage title="Buttons">
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
