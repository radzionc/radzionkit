import { SourceCodeLink } from "components/SourceCode/SourceCodeLink";
import type { NextPage } from "next";
import { Countdown } from "lib/ui/Countdown";
import { RegularPage } from "lib/ui/page/RegularPage";
import { HStack } from "lib/ui/Stack";
import { Text } from "lib/ui/Text";
import { hoursToMilliseconds } from "date-fns";

const CountdownPage: NextPage = () => {
  const endsAt = Date.now() + hoursToMilliseconds(24 * 10);
  return (
    <RegularPage
      title={
        <HStack alignItems="center" gap={4}>
          <Text>Countdown</Text>
          <SourceCodeLink to="https://github.com/RodionChachura/react-toolkit/blob/main/pages/countdown.tsx" />
        </HStack>
      }
    >
      <Countdown endsAt={endsAt} />
    </RegularPage>
  );
};

export default CountdownPage;
