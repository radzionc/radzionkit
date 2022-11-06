import type { NextPage } from "next";
import { ColorList } from "components/ColorList";
import { DemoPage } from "components/DemoPage";

const StacksPage: NextPage = () => {
  return (
    <DemoPage youtubeVideoId="ed_bLoV_A6M" title="Colors">
      <ColorList />
    </DemoPage>
  );
};

export default StacksPage;
