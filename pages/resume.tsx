import type { NextPage } from "next";

import { DemoPage } from "components/DemoPage";
import { Resume } from "components/Resume";
import { ReversedTheme } from "lib/ui/theme/ReversedTheme";

const ResumePage: NextPage = () => {
  return (
    <DemoPage title="Radzion's Resume">
      <Resume />
    </DemoPage>
  );
};

export default ResumePage;
