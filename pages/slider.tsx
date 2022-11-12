import type { NextPage } from "next";
import { DemoPage } from "components/DemoPage";
import { WorkBudgetForm } from "components/WorkBudgetForm";

const SliderPage: NextPage = () => {
  return (
    <DemoPage title="Slider">
      <WorkBudgetForm />
    </DemoPage>
  );
};

export default SliderPage;
