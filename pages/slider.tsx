import type { NextPage } from "next";
import { DemoPage } from "components/DemoPage";
import { WorkBudgetForm } from "components/WorkBudgetForm";

const SliderPage: NextPage = () => {
  return (
    <DemoPage youtubeVideoId="HqfFtOh8_50" title="Slider">
      <WorkBudgetForm />
    </DemoPage>
  );
};

export default SliderPage;
