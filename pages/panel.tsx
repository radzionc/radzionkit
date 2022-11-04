import type { NextPage } from "next";
import { VStack } from "lib/ui/Stack";
import { DemoPage } from "components/DemoPage";
import { ExpandablePanel } from "lib/ui/Panel/ExpandablePanel";
import { Text } from "lib/ui/Text";
import { ExternalLink } from "lib/navigation/Link/ExternalLink";
import { PrimaryButton } from "lib/ui/buttons/rect/PrimaryButton";

const PanelPage: NextPage = () => {
  return (
    <DemoPage title="Panel">
      <ExpandablePanel
        width={400}
        header={
          <VStack alignItems="start" gap={4}>
            <Text size={18} weight="bold">
              Increaser
            </Text>
            <Text>Stop overworking</Text>
          </VStack>
        }
        renderContent={() => (
          <VStack gap={20}>
            <Text>👨‍💻 No distractions, only deep work and quality breaks.</Text>
            <Text>💪 Build good habits. Break bad ones.</Text>
            <Text>😌 Efficiency over long hours. More time for life!</Text>
            <Text>☀️ Start work early. Enjoy the evening!</Text>
            <ExternalLink to="https://increaser.org">
              <PrimaryButton>Start now</PrimaryButton>
            </ExternalLink>
          </VStack>
        )}
      />
    </DemoPage>
  );
};

export default PanelPage;
