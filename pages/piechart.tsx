import type { NextPage } from "next";
import { DemoPage } from "components/DemoPage";
import { useTheme } from "styled-components";
import { PieChart } from "lib/ui/PieChart";

const PieChartPage: NextPage = () => {
  const {
    colors: { getPaletteColor },
  } = useTheme();

  return (
    <DemoPage youtubeVideoId="OEZFzrwZMd8" title="Pie Chart">
      <div style={{ maxWidth: 320, width: "100%" }}>
        <PieChart
          items={[
            { value: 500, color: getPaletteColor(3) },
            { value: 300, color: getPaletteColor(8) },
            { value: 200, color: getPaletteColor(5) },
            { value: 100, color: getPaletteColor(1) },
          ]}
        />
      </div>
    </DemoPage>
  );
};

export default PieChartPage;
