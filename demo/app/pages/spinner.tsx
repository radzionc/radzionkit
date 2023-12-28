import { DemoPage } from '@demo/app/components/DemoPage'
import { Spinner } from '@lib/ui/loaders/Spinner'
import { Text } from '@lib/ui/text'
import { HStack } from '@lib/ui/layout/Stack'
import { makeDemoPage } from '@demo/app/layout/makeDemoPage'

export default makeDemoPage(() => {
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
})
