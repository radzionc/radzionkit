import type { NextPage } from "next";
import { GhostButton } from "lib/ui/buttons/rect/GhostButton";
import { OutlinedButton } from "lib/ui/buttons/rect/OutlinedButton";
import { PrimaryButton } from "lib/ui/buttons/rect/PrimaryButton";
import { SimpleNamedList } from "lib/ui/Layout/SimpleNamedList";
import { HStack, VStack } from "lib/ui/Stack";
import { DemoPage } from "components/DemoPage";

const ButtonPage: NextPage = () => {
  return (
    <DemoPage youtubeVideoId="K5y_irnv34s" title="Button">
      <VStack fullWidth gap={40}>
        <SimpleNamedList name="Primary">
          <HStack gap={20}>
            <PrimaryButton kind="primary">Submit</PrimaryButton>
            <PrimaryButton kind="attention">Submit</PrimaryButton>
            <PrimaryButton isDisabled="Not enough balance">
              Disabled
            </PrimaryButton>
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
    </DemoPage>
  );
};

export default ButtonPage;
