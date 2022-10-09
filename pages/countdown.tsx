import type { NextPage } from "next";
import { Countdown } from "lib/ui/Countdown";
import { hoursToMilliseconds } from "date-fns";
import { DemoPage } from "components/DemoPage";

const CountdownPage: NextPage = () => {
  const endsAt = Date.now() + hoursToMilliseconds(24 * 10);
  return (
    <DemoPage title="Countdown">
      <Countdown endsAt={endsAt} />
    </DemoPage>
  );
};

export default CountdownPage;
