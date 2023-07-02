import type { NextPage } from "next"
import { VStack } from "lib/ui/Stack"
import { DemoPage } from "components/DemoPage"
import { Button, buttonKinds } from "lib/ui/buttons/Button"
import { SameWidthChildrenRow } from "lib/ui/Layout/SameWidthChildrenRow"
import { Text } from "lib/ui/Text"

const ButtonPage: NextPage = () => {
  return (
    <DemoPage title="Button">
      <SameWidthChildrenRow
        fullWidth
        gap={40}
        childrenWidth={160}
        maxColumns={3}
      >
        {buttonKinds.map((kind) => (
          <VStack alignItems="start" key={kind} gap={8}>
            <Text color="supporting">{kind}</Text>
            <Button kind={kind}>Submit</Button>
          </VStack>
        ))}
      </SameWidthChildrenRow>
    </DemoPage>
  )
}

export default ButtonPage
