import type { NextPage } from "next";
import { DistributionBar } from "lib/ui/DistributionBar";
import { DemoPage } from "components/DemoPage";
import { useTheme } from "styled-components";

const DistributionBarPage: NextPage = () => {
  const {
    colors: { getPaletteColor },
  } = useTheme();

  return (
    <DemoPage title="DistributionBar">
      <DistributionBar
        items={[
          { value: 100, color: getPaletteColor(1) },
          { value: 200, color: getPaletteColor(5) },
          { value: 300, color: getPaletteColor(8) },
        ]}
      />
    </DemoPage>
  );
};

export default DistributionBarPage;
