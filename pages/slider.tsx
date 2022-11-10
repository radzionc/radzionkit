import type { NextPage } from "next";
import { DemoPage } from "components/DemoPage";
import { useTheme } from "styled-components";
import { WorkBudgetForm } from "components/WorkBudgetForm";

const SliderPage: NextPage = () => {
  const {
    colors: { getPaletteColor },
  } = useTheme();

  return (
    <DemoPage title="Slider">
      <WorkBudgetForm />
    </DemoPage>
  );
};

export default SliderPage;
