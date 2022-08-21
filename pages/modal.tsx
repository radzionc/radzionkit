import { SourceCodeLink } from "components/SourceCode/SourceCodeLink";
import { ExternalLink } from "navigation/Link/ExternalLink";
import type { NextPage } from "next";
import { PrimaryButton } from "ui/buttons/rect/PrimaryButton";
import { Modal } from "ui/Modal";
import { OverlayOpener } from "ui/OverlayOpener";
import { RegularPage } from "ui/page/RegularPage";
import { HStack, VStack } from "ui/Stack";
import { Text } from "ui/Text";

const ButtonPage: NextPage = () => {
  return (
    <RegularPage
      title={
        <HStack alignItems="center" gap={4}>
          <Text>Modal / Popup</Text>
          <SourceCodeLink to="https://github.com/RodionChachura/react-toolkit/blob/main/pages/modal.tsx" />
        </HStack>
      }
    >
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
    </RegularPage>
  );
};

export default ButtonPage;
