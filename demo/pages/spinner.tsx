import { DemoPage } from 'components/DemoPage'
import { Spinner } from '@radzionkit/ui/loaders/Spinner'
import { Text } from '@radzionkit/ui/text'
import { HStack } from '@radzionkit/ui/layout/Stack'
import { makeDemoPage } from 'layout/makeDemoPage'

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
