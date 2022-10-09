import type { NextPage } from "next";
import { getViewSetup } from "lib/shared/utils/getViewSetup";
import styled from "styled-components";
import { Card } from "lib/ui/Card";
import { ViewSelector } from "lib/ui/inputs/Select/ViewSelector";
import { VStack } from "lib/ui/Stack";
import { DemoPage } from "components/DemoPage";

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
    <DemoPage youtubeVideoId="aSiTQifBsAc" title="Select View">
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
    </DemoPage>
  );
};

export default SelectViewPage;
