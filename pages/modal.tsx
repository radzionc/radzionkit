import { ExternalLink } from "lib/navigation/Link/ExternalLink";
import type { NextPage } from "next";
import { PrimaryButton } from "lib/ui/buttons/rect/PrimaryButton";
import { Modal } from "lib/ui/Modal";
import { OverlayOpener } from "lib/ui/OverlayOpener";
import { HStack, VStack } from "lib/ui/Stack";
import { Text } from "lib/ui/Text";
import { DemoPage } from "components/DemoPage";

const ButtonPage: NextPage = () => {
  return (
    <DemoPage youtubeVideoId="v61B8aToxR0" title="Modal / Popup">
      <HStack fullWidth gap={40}>
        <OverlayOpener
          renderOpener={({ onOpen }) => (
            <PrimaryButton onClick={onOpen}>Open Modal</PrimaryButton>
          )}
          renderOverlay={({ onClose }) => (
            <Modal
              title="Get More Freedom"
              onClose={onClose}
              width={400}
              renderContent={() => (
                <VStack gap={20}>
                  <Text>
                    👨‍💻 No distractions, only deep work and quality breaks.
                  </Text>
                  <Text>💪 Build good habits. Break bad ones.</Text>
                  <Text>
                    😌 Efficiency over long hours. More time for life!
                  </Text>
                  <Text>☀️ Start work early. Enjoy the evening!</Text>
                  <ExternalLink to="https://increaser.org">
                    <PrimaryButton>Start now</PrimaryButton>
                  </ExternalLink>
                </VStack>
              )}
            />
          )}
        />
      </HStack>
    </DemoPage>
  );
};

export default ButtonPage;
