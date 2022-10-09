import type { NextPage } from "next";
import { ColorList } from "components/ColorList";
import { DemoPage } from "components/DemoPage";

const StacksPage: NextPage = () => {
  return (
    <DemoPage title="Colors">
      <ColorList />
    </DemoPage>
  );
};

export default StacksPage;
