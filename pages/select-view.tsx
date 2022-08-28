import { SourceCodeLink } from "components/SourceCode/SourceCodeLink";
import type { NextPage } from "next";
import { getViewSetup } from "shared/utils/getViewSetup";
import styled from "styled-components";
import { Card } from "ui/Card";
import { ViewSelector } from "ui/inputs/Select/ViewSelector";
import { RegularPage } from "ui/page/RegularPage";
import { HStack, VStack } from "ui/Stack";
import { Text } from "ui/Text";

export const views = ["primary", "attention"] as const;
export type View = typeof views[number];

export const { ViewProvider, useView, RenderView } = getViewSetup<View>(
  "primary",
  "View"
);

const ViewName: Record<View, string> = {
  primary: "Primary",
  attention: "Attention",
};

export const Selector = () => {
  const { view, setView } = useView();

  return (
    <ViewSelector
      options={views}
      getName={(option) => ViewName[option]}
      selectedOption={view}
      onSelect={setView}
      groupName="-view"
    />
  );
};

const PrimaryView = styled(Card)`
  background: ${({ theme }) => theme.colors.primary.toCssValue()};
`;

const AttentionView = styled(Card)`
  background: ${({ theme }) => theme.colors.attention.toCssValue()};
`;

const SelectViewPage: NextPage = () => {
  return (
    <RegularPage
      title={
        <HStack alignItems="center" gap={4}>
          <Text weight="bold" size={24} color="regular">
            Select View
          </Text>
          <SourceCodeLink to="https://github.com/RodionChachura/react-toolkit/blob/main/pages/select-view.tsx" />
        </HStack>
      }
    >
      <Card width={320}>
        <ViewProvider>
          <VStack fullWidth gap={20}>
            <Selector />
            <RenderView
              attention={() => <AttentionView />}
              primary={() => <PrimaryView />}
            />
          </VStack>
        </ViewProvider>
      </Card>
    </RegularPage>
  );
};

export default SelectViewPage;
