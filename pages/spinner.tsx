import type { NextPage } from "next"
import { DemoPage } from "components/DemoPage"
import { Spinner } from "lib/ui/Spinner"
import { Text } from "lib/ui/Text"
import { HStack } from "lib/ui/Stack"

const SpinnerPage: NextPage = () => {
  return (
    <DemoPage title="Spinner">
      <HStack alignItems="center" gap={40} wrap="wrap">
        <Text size={40}>
          <Spinner />
        </Text>
        <Text color="supporting" size={20}>
          <Spinner />
        </Text>
      </HStack>
    </DemoPage>
  )
}

export default SpinnerPage
